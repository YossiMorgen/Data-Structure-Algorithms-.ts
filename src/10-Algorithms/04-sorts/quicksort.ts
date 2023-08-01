var cycles = 0;

function quickSort(arr: number[]){
    if( arr.length <= 1 ){ return arr; }
    let tmp = arr[0]
    if( arr.length == 2 ){
        if( arr[0] > arr[1] ){ 
            arr[0] = arr[1];
            arr[1] = tmp; 
        }
        return arr;
    }
    let cycle = ++cycles;
    let pivot = Math.floor(arr.length * Math.random());
    let pivotValue = arr[pivot];
    let arrLeft = [];
    let arrRight = [];
    let arrPivot = [];
    for( let i=0; i<arr.length; i++ ){
        if( pivotValue === arr[i] ){
            arrPivot.push(pivotValue);
        }
        else if( pivotValue > arr[i] ){
            arrLeft.push(arr[i]);
        }
        else{
            arrRight.push(arr[i]);
        }
    }
    console.log('|\tCycle #'+cycle+' Start\tarrLeft='+arrLeft+'\tarrPivot='+arrPivot+'\tarrRight='+arrRight);
    arrLeft = quickSort(arrLeft);
    arrRight = quickSort(arrRight);
    let arrSorted = [].concat(arrLeft, arrPivot, arrRight);
    console.log('|\tCycle #'+cycle+' End\tarrLeft='+arrLeft+'\tarrPivot='+arrPivot+'\tarrRight='+arrRight);
    return arrSorted;
}

export {
    quickSort

}