import { DSA101_DoubleLL_Node } from "./DoubleLL-Node";

export class DSA101_DoubleLL {
    public head: DSA101_DoubleLL_Node;
    public tail: DSA101_DoubleLL_Node;
    public size = 0;

    constructor(){
        this.head = null;
        this.tail = null;
    }
  
    add(value: number): void{
        this.tail = new DSA101_DoubleLL_Node(value,null,this.tail);
        if( this.head == null ){
            this.head = this.tail;
        }
        if( this.tail.prev == null ){
            this.tail.prev.next = this.tail;
        }
        this.size++;
    }

    get( indx: number ): number{
        if( indx >= this.size ){ return null; }
        let outputNode = this.head
        if( indx < this.size/2 ){
            for( let i=0; i<indx; i++ ){
                outputNode = outputNode.next;
            }
        }
        else{
            outputNode = this.tail;
            for( let i=this.size-1; i>indx; i-- ){
                outputNode = outputNode.prev;
            }
        }
        return outputNode.value;
    }

    remove( indx: number ): void{
        console.log("remove("+indx+")");        
        
        if( indx >= this.size ){ return null; }
        if( indx < 0 ){ return null; }
        if( indx == 0 ){ 
            console.log("remove head");
            this.head = this.head.next;
            this.size--;
            return;
        }

        if(indx == this.size - 1){
            console.log("remove tail");
            this.tail = this.tail.prev;
            this.size--;
            return;
        }

        
        let count = 0;
        let removedNode = this.head;
        if( indx < this.size/2 ){
            for( let i=0; i<indx; i++ ){
                removedNode = removedNode.next;
                count ++;
                console.log("count low: ",count);
                
            }
        } else {
            removedNode = this.tail;
            for( let i=this.size-1; i>=indx; i-- ){
                        console.log("removedNode: ",removedNode);
                removedNode = removedNode.prev;
                count ++;
                console.log("count high: ",count);
                
            }
        }
        console.log("count: ",count);
        
        console.log("removedNode: ",removedNode);

        if(!removedNode){ return null; }

        // if( removedNode.prev != null ){
            removedNode.prev.next = removedNode.next;
        // } 
        this.size--;

        return removedNode.value;
    }

    getSize(): number{
        return this.size;
    }

    toString(): string{
        let output = 'DSA101_DoubleLL:\n{';
        output += '\n\t\"size\":' + this.size;
        output += '\n\t\"head\":' + this.head;
        output += '\n\t\"tail\":' + this.tail;
        output += ',\n\t\"list\": [';
        let currNode = this.head;
        let indx = 0;
        while( currNode != null ){
            if( indx > 0 ){ output += ','; }
            output += '\n\t\t{\n\t\t\t\"item\":' + indx + ',\n\t\t\t\"value\":\"' + currNode.value + '\",\n\t\t\t\"next\":' + currNode.next + '\n\t\t}' ;
            currNode = currNode.next;
            indx++;
        }
        output += '\n\t]\n}';
        return output;
    }

}
