export default class BBST_Node{
    public value: number;
    public left: BBST_Node;
    public right: BBST_Node;
    public height = 0;

    public constructor(value: number, left = undefined, right = undefined){
        this.value = value;
        this.right = right;
        this.left = left;
    }

    quickPrint(prefix = '\n',role='R'){
        let outStr = prefix+role+':{ \"value\":'+this.value+", \"height\":"+this.height+", ";
        prefix += '   ';
        if( this.left == undefined ){
            outStr += "L:undefined";
        } else {
            outStr += this.left.quickPrint(prefix,'L');
        }
        outStr += ",";
        if( this.right == undefined ){
            outStr += "R:undefined";
        } else {
            outStr += this.right.quickPrint(prefix,'R');
        }
        outStr += prefix + '}';
        return outStr;
    }
}