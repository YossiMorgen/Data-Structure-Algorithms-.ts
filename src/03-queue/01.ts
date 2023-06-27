export default class Queue {
    private queue: Array<any>;
    private headIndex = -1;
    private tailIndex = -1;
    private size = 0;
    private capacity = 0;

    constructor(initCapacity: number) {
        this.queue = new Array(initCapacity);
        this.capacity = initCapacity;
    }

    public isEmpty() {
        return this.size === 0;
    }

    public peak(){
        return this.queue[this.headIndex];
    }

    public push(val: any){
        this.tailIndex ++;
        if(this.headIndex == -1) this.headIndex = 0;
        this.queue[this.tailIndex] = val;
        this.size ++;
    }

    public pop(){
        if(this.headIndex == -1) return;
        const output = this.peak();
        delete this.queue[this.headIndex];
        console.log(this.queue[this.headIndex]);
        this.headIndex ++;
        this.size --;
        if(this.size == 0) this.headIndex = -1;
        return output;
    }

    
    toString(){
        let output = 'DSA101_Queue:\n{';
        output += '\tsize = '+this.size+'\n';
        output += '\tinitCapacity = '+this.capacity+'\n';
        output += '\theadIndex = '+this.headIndex+'\n';
        output += '\ttailIndex = '+this.tailIndex+'\n';
        output += '\tqueue = [\n';
        var currIndex = -1;
        for( let offset=0; offset < this.size; offset++ ){
            currIndex = this.headIndex+offset;
            output += '\t\t(index='+currIndex+',value='+this.queue[currIndex%this.capacity]+')\n';
        }
        output += '\t]\n'
        output += '}';
        return output;
    }

    public search(val : any){
        for(let i = 0; i <= this.size; i++){
            if(this.queue[(i + this.headIndex % this.capacity)] == val){
                return (i + this.headIndex % this.capacity)
            }
        }
    }

    

}