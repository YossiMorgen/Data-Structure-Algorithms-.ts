export class DSA101_BST_Node {

    public value: number;
    public right: DSA101_BST_Node;
    public left: DSA101_BST_Node;

    constructor(value: number, left = null, right = null ){
        this.value = value;
        this.right = right;
        this.left = left;
    }

    quickPrint(prefix = '\n',role='R'){
        let outStr = prefix+role+':{ \"value\":'+this.value+",";
        prefix += '   ';
        if( this.left == null ){
            outStr += "L:null";
        } else {
            outStr += this.left.quickPrint(prefix,'L');
        }
        outStr += ",";
        if( this.right == null ){
            outStr += "R:null";
        } else {
            outStr += this.right.quickPrint(prefix,'R');
        }
        outStr += '}';
        return outStr;
    }

}

export default DSA101_BST_Node;