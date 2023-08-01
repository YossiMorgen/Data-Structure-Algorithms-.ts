import DSA101_BST from "../../07-binary-search-tree.ts/BTS";

function initializeInputArray(sz: number){
    let arrOut = new Array()
    var currValue = 0;
    for( let i=0; i<sz; i++ ){
        currValue = Math.floor(Math.random()*sz);
        arrOut.push(currValue);
    }
    return arrOut;
}

function sortByBSTInsert(arrIn : number[]){
    if( arrIn == null ) return null;
    // New BST
    var treeSort = new DSA101_BST();
    for( let i=0; i<arrIn.length; i++ ){
        treeSort.add(arrIn[i]);
    }
    console.log("DEBUG: tree = "+treeSort.quickPrint());
    var arrOut = new Array();
    treeSort.toArray(arrOut);
    return arrOut;
}

export {
    initializeInputArray,
    sortByBSTInsert
}