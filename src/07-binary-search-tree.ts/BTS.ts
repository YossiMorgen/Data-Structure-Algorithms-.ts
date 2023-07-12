import DSA101_BST_Node from "./BTS-Node";

export class DSA101_BST {
    public root: DSA101_BST_Node;
    public size: number;

    constructor(){
        this.root = null;
        this.size = 0;
    }

    add( value: number ){
        if( value == null ) return;
        let newNode = new DSA101_BST_Node(value);
        if( this.root == null ){ 
            this.root = newNode;
        }
        else{
            let currNode = this.root;
            let parentNode = null;
            let isLeft = false;
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

    remove(value: number){        
        if( value == null || this.root == null ) return;

        let currNode = this.root;
        let parentNode = null;
        let isLeft = false;
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
            
            if(currNode.value == value){ // s
                console.log(currNode);
                
                if(currNode.right){
                    isLeft ? parentNode.left = currNode.right : parentNode.right = currNode.right
                    if(currNode.left){
                        this.recursion(currNode.left, parentNode.right)
                    }
                }else if(currNode.left){
                    isLeft ? parentNode.left = currNode.left : parentNode.right = currNode.left;
                }
                break;
            }
        }
    }

    private recursion(leftNode: DSA101_BST_Node, currNode: DSA101_BST_Node){
        if(!currNode.left){
            currNode.left = leftNode;
            return
        }
        if(!currNode.right){
            this.recursion(leftNode, currNode.left)
        } else{
            this.recursion(currNode.left, currNode.right)            
        }

        currNode.left = leftNode;
    }

    // add( value: number ){
    //     if( value == null ) return;
    //     let newNode = new DSA101_BST_Node(value);
    //     if( this.root == null ){ 
    //         this.root = newNode;
    //     }
    //     else{
    //         let parentNode: DSA101_BST | DSA101_BST_Node = this;
    //         let isLeft: "right" | "left" | "root" = "root";
            
    //         do{
    //             parentNode = parentNode[isLeft];

    //             if( parentNode["value"] > value ){
    //                 isLeft = "left";
    //             }
    //             else {
    //                 isLeft = "right";
    //             }
    //         } while( parentNode[isLeft] != null )

    //         parentNode[isLeft] = newNode;
    //     }
    //     this.size++;
    // }

    quickPrint(){
        let outStr = 'DSA101_BST:{';
        outStr += '\"size\":'+this.size;
        outStr += '\"R\":'+this.root.quickPrint();
        outStr+='\n};'
        return outStr;
    }
}

export default DSA101_BST;