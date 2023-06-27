class Fun{
    name: Function;
    args: Array<any>
}

export default class CallStack{
    private stack : Array<Fun>;
    private headIndex = -1;

    constructor(initCapacity: number){
        this.stack = new Array(initCapacity);
    }

    public invoke(name: Function, args: Array<any>){
        this.headIndex++;
        this.stack[this.headIndex] = new Fun();
        this.stack[this.headIndex].name = name;
        this.stack[this.headIndex].args = args;
    }

    public run(){
        for(let i = 0; i <= this.headIndex; i++){
            this.stack[i].name(...this.stack[i].args)
        }
    }

}