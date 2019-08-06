// 在class中使用泛型
class List<T>{
    private data: T[];

    constructor(elements: T[]){
        this.data = elements;
    }

    add(t: T){
        this.data.push(t)
    }

    remove(t: T){
        let index = this.data.indexOf(t);
        if(index > -1){
            this.data.splice(index, 1);
        }
    }

    asArray(): T[]{
        return this.data;
    }
}

let list = new List<number>([100, 200, 300]);
list.add(400);
console.log(list);
list.remove(100);
console.log(list);

class Pair<F, S>{
    private _first: F;
    private _second: S;

    constructor(first: F, second: S){
        this._first = first;
        this._second = second;
    }

    getFirst(): F{
        return this._first;
    }

    getSecond(): S{
        return this._second;
    }

}

let p = new Pair<boolean, string>(false, 'zzh');
console.log(p.getFirst());
console.log(p.getSecond());