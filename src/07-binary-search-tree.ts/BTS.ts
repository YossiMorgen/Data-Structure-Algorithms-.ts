import DSA101_BST_Node from "./BTS-Node";

export class DSA101_BST {
    public root: DSA101_BST_Node;
    public size: number;

    constructor(){
        this.root = null;
        this.size = 0;
    }

    add( value ){
        if( value == null ) return;
        var newNode = new DSA101_BST_Node(value);
        if( this.root == null ){ 
            this.root = newNode;
        }
        else{
            var currNode = this.root;
            var parentNode = null;
            var isLeft = false;
            while( currNode != null ){
                parentNode = currNode;
                if( parentNode.value > value ){
                    isLeft = true;
                    currNode = parentNode.left;
                }
                else {
                    isLeft = false;
                    currNode = parentNode.right;
                }
            }
            if( isLeft ){
                parentNode.left = newNode;
            } else {
                parentNode.right = newNode;
            }
        }
        this.size++;
    }

    quickPrint(){
        var outStr = 'DSA101_BST:{';
        outStr += '\"size\":'+this.size;
        outStr += '\"R\":'+this.root.quickPrint();
        outStr+='};'
        return outStr;
    }
}

export default DSA101_BST;