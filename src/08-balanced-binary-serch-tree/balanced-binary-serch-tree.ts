import BBST_Node from "./BBST-Node";

export default class BBST{
    protected root: BBST_Node;

    public constructor(value: number){
        this.root = new BBST_Node(value);
    }

    public insert(value: number){
        if(!this.root){
            this.root = new BBST_Node(value);
            return
        }
        
        this.recursion(this.root, value)
    }

    private recursion(currNode: BBST_Node, value: number): BBST_Node{
        // this all function needs review
        if(currNode.value == value){return currNode}
        
        let newBBST: BBST_Node;
        if(value > currNode.value){
            if(!currNode.right){
                currNode.right = new BBST_Node(value);
                currNode.height = (currNode.left ? currNode.left.height ++ : 1)
                return currNode;
            } else {
                newBBST = this.recursion(currNode.right, value);
                currNode.right = newBBST;
            }
        } else {
            if(!currNode.left){
                currNode.left = new BBST_Node(value);
                currNode.height = (currNode.right ? currNode.right.height ++ : 1)
                return currNode;
            } else {
                newBBST = this.recursion(currNode.left, value);
                currNode.left = newBBST;
            }
        }
        currNode.height = currNode.height > newBBST.height ? currNode.height : newBBST.height;

        
        if(currNode.left && currNode.right ){
            if(currNode.left.height - currNode.right.height > 1){
                if(currNode.left.left && currNode.left.right){
                    if(currNode.left.left.height > currNode.left.right.height){
                        currNode = this.rotateRight(currNode);
                    } else {
                        currNode.left = this.rotateLeft(currNode.left);
                        currNode = this.rotateRight(currNode);
                    }
                } else if(currNode.left.left){
                    currNode = this.rotateRight(currNode);
                } else {
                    currNode.left = this.rotateLeft(currNode.left);
                    currNode = this.rotateRight(currNode);
                }
            } else if(currNode.right.height - currNode.left.height > 1){
                if(currNode.right.right && currNode.right.left){
                    if(currNode.right.right.height > currNode.right.left.height){
                        currNode = this.rotateLeft(currNode);
                    } else {

                        currNode.right = this.rotateRight(currNode.right);
                        currNode = this.rotateLeft(currNode);
                    }
                } else if(currNode.right.right){
                    currNode = this.rotateLeft(currNode);
                } else {
                    currNode.right = this.rotateRight(currNode.right);
                    currNode = this.rotateLeft(currNode);
                }
            }

        } else if(currNode.left){
            if(currNode.left.height > 1){

                if(currNode.left.left && currNode.left.right){
                    if(currNode.left.left.height > currNode.left.right.height){
                        currNode = this.rotateRight(currNode);
                    } else {
                        currNode.left = this.rotateLeft(currNode.left);
                        currNode = this.rotateRight(currNode);
                    }
                } else if(currNode.left.left){
                    currNode = this.rotateRight(currNode);
                } else {
                    currNode.left = this.rotateLeft(currNode.left);

                    currNode = this.rotateRight(currNode);
                }
            }
        } else if(currNode.right){
            if(currNode.right.height > 1){
                if(currNode.right.right && currNode.right.left){

                    if(currNode.right.right.height > currNode.right.left.height){
                        currNode = this.rotateLeft(currNode);
                    } else {
                        currNode.right = this.rotateRight(currNode.right);
                        currNode = this.rotateLeft(currNode);
                    }
                } else if(currNode.right.right){
                    currNode = this.rotateLeft(currNode);
                } else {
                    currNode.right = this.rotateRight(currNode.right);
                    currNode = this.rotateLeft(currNode);
                }
            }
        }

        return newBBST
    }

    private rotateLeft(currNode: BBST_Node){
        let newRoot = currNode.right;
        currNode.right = newRoot.left;
        newRoot.left = currNode;
        return newRoot;
    }

    private rotateRight(currNode: BBST_Node){
        let newRoot = currNode.left;
        currNode.left = newRoot.right;
        newRoot.right = currNode;
        return newRoot;
    }

    quickPrint(){
        let outStr = 'DSA101_BST:{';
        outStr += '\"height\":'+this.root.height;
        outStr += '\"H\":'+this.root.quickPrint();
        outStr+='\n};'
        return outStr;
    } 
}