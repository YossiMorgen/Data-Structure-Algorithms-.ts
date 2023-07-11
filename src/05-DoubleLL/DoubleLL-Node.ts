import { DSA101_DoubleLL_Node } from "./DoubleLL";

export class DSA101_DoubleLL {
    public head: DSA101_DoubleLL_Node
    public tail: DSA101_DoubleLL_Node
    public size = 0
    constructor(){
        this.head = null;
        this.tail = null;
    }
  
    add(value){
        this.tail = new DSA101_DoubleLL_Node(value,null,this.tail);
        if( this.head == null ){
            this.head = this.tail;
        }
        if( this.tail.prev != null ){
            this.tail.prev.next = this.tail;
        }
        this.size++;
    }

    get( indx ){
        if( indx >= this.size ){ return null; }
        var outputNode = this.head
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

    remove( indx ){
        if( indx >= this.size ){ return null; }
        if( indx < 0 ){ return null; }
        var removedNode = this.head;
        if( indx == 0 ){ 
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        else if( indx == this.size - 1 ){
            removedNode = this.tail;
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        else{
            for(let i=0; i<indx; i++){
                removedNode = removedNode.next;
            }
            var prevNode = removedNode.prev;
            var nextNode = removedNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.prev = null;
            removedNode.next = null;
        }
        this.size--;
        return removedNode.value;
    }

    getSize(){
        return this.size;
    }

    toString(){
        let output = 'DSA101_DoubleLL:\n{';
        output += '\n\t\"size\":' + this.size;
        output += '\n\t\"head\":' + this.head;
        output += '\n\t\"tail\":' + this.tail;
        output += ',\n\t\"list\": [';
        var currNode = this.head;
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
