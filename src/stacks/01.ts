export default class StkAmmunition{
    private stack: Array<any>;
    private headIndx = -1;

    constructor(initCapacity = 10){
        this.stack = new Array(initCapacity);
    }

    public pushArray(arr: Array<any>){
        for (let index = 0; index < arr.length; index++) {
            this.stack[index] = arr[index]
        }
        this.headIndx += arr.length;
    }

    public push(value: any){
        this.headIndx++;
        this.stack[this.headIndx] = value;
    }

    public peek(){
        return this.stack[this.headIndx]
    }

    public pop(){
        let output = this.peek();
        this.stack[this.headIndx] = undefined;
        this.headIndx--;
        return output;
    }

    public extractAll(){
        
        for( let i = 0; i <= this.stack.length; i++){
            if(!this.stack[i]){
                break;
            }
            this.stack[i] = undefined
            console.log(this.stack[i]);
            
        }
        this.headIndx = -1
    }

    public toString(){
        let output = 'DSA101_Stack:\n{';
        output += '\n\t\"headIndx\":' + this.headIndx;
        output += ',\n\t\"stack\": [';
        for( let indx = this.headIndx; indx >= 0; indx-- ){
            if( indx < this.headIndx ){
                output += ',';
            }
            output += '\n\t\t{\n\t\t\t\"indx\":' + indx + ',\n\t\t\t\"value\"=\"' + this.stack[indx] + '\" }' ;
        }
        output += '\n\t]\n}';
        return output;
    }

}