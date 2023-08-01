

export class DSA101_DoubleLL_Node {

    public value: any;
    public prev: DSA101_DoubleLL_Node;
    public next: DSA101_DoubleLL_Node;

    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    toString(){
        var output = "DSA101_DoubleLL_Node::{";
        output += "\"value\":"+this.value+",";
        output += "\"prev\":";
        if( this.prev == null ){
            output += "null";
        }
        else{
            output += "(object)";
        }
        output += "\"next\":";
        if( this.next == null ){
            output += "null";
        }
        else{
            output += "(object)";
        }
        output += "}";
    }

}

export default DSA101_DoubleLL_Node;