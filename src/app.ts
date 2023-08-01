import { quickSort } from "./10-Algorithms/04-sorts/quicksort";

console.info('+----------------------------------------');
console.info('| Quick Sort - create values array:');
var cycles = 0;
var arrValues2 = [ -1, 0 , -1, 1, 1, 1, -1, 0, 0, 1, -1, 1, 0 ];
console.log('|\tarrValues2 =\t'+arrValues2.toString());
var arrOut2 = quickSort(arrValues2);
console.log('|\tarrOut2 =\t'+arrOut2.toString());