export class Cache{
    private arr: Array<any>;
    private cache = new Array(10);
    private index = 0;

    constructor(arr: Array<any>){
        this.arr = arr;
    }

    public search(val: any){

        for(let i  = 0; i < 10; i++){
            if(this.cache[i] = val ){
                return this.cache[i];
            }
        }

        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] ==val){
                this.cache[this.index % 10] = this.arr[i];
                this.index++;
                return this.arr[i];
            }
        }

        return null;
    }
}