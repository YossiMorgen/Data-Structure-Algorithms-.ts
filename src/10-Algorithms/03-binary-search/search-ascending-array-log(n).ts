export function searchArray(){
    // Create an Array of size 1023
    // Fill the array with numbers 1 to 1023 by ascending order
    let arr = new Array(1023).fill(0).map((_, i) => 1023 - i);
    
    // Search for the number 512
    const index = searchRecursion(arr, 384);
    console.log(index);
}

function searchRecursion(arr: Array<number>, val: number, i = Math.floor(arr.length / 2)): number{
    
    if(!arr[i]) return;

    if(arr[i] == val) return i;

    if(arr[i] > val){
        return searchRecursion(arr.slice(i, arr.length), val);
    } else {
        return searchRecursion(arr.slice(0, i), val);
    }

}