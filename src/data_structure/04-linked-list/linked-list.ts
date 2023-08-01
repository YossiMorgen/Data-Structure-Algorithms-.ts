import DSA101_LinkedList_Node from "./node";

export class DSA101_LinkedList {
    private head: DSA101_LinkedList_Node;
    private size: number;

    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return (this.size == 0);
    }

    getSize(){
        return this.size;
    }

    add( value: number ){
        if( value == undefined || value == null ){ return undefined; }

        if( this.size == 0 ){
            this.head = new DSA101_LinkedList_Node(value,null);
        }
        else{
            var currNode = this.head;
            while( currNode.next != null ){
                currNode = currNode.next;
            }
            currNode.next = new DSA101_LinkedList_Node(value,null);
        }
        this.size++;
    }

    remove(value: number){
        if( value == undefined || value == null ){ return undefined; }
        if( this.size == 0 ){ return undefined; }

        if( this.head.value == value ){
            this.head = this.head.next;
        }
        else{
            var currNode = this.head;
            var prevNode = null;
            while( currNode != null ){
                if( currNode.value == value ){
                    prevNode.next = currNode.next;

                    currNode = null;
                    this.size--;
                    return;
                }
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
    }

    get(indx: number){
        if( indx < 0 || indx >= this.size ){ return null; }
        let outputNode = this.head;
        for( let i=0; i<indx; i++ ){
            outputNode = outputNode.next;
        }
        return outputNode.value;
    }

    toString(){
        var output = 'DSA101_LinkedList::{';
        output += '\"size\":'+this.size+',';
        output += '\"head\":';
        if( this.head == null || this.head == undefined ){
            output += 'null';
        }
        else{
            output += '(object)';
        }
        output += '\nList:['
        var currNode = this.head;
        var indx = 0;
        while( currNode != null ){
            if( indx > 0 ){ output += ','; }
            output += '\n\t{ ['+indx+'] \"value\":'+currNode.value+' }';
            currNode = currNode.next;
            indx++;
        }
        output += "]\n}";
        return output;
    }

    search(value: any){
        var currNode = this.head;
        let i = 0;
        while( currNode != null ){
            if( currNode.value == value ){ return i; }
            currNode = currNode.next;
            i++;
        }
        return -1;
    }

    insertAt(value: number, indx: number){
        if( indx < 0 || indx > this.size ){ return undefined; }
        if( indx == 0 ){
            this.head = new DSA101_LinkedList_Node(value,this.head);
        }
        else{
            var prevNode = this.head;
            for( let i=0; i<indx-1; i++ ){
                prevNode = prevNode.next;
            }
            prevNode.next = new DSA101_LinkedList_Node(value,prevNode.next);
        }
        this.size++;
    }
}

export default DSA101_LinkedList;