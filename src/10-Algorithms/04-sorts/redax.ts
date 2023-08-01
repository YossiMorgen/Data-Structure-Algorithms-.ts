function radixSort(arr: Array<number>, radix){
    let rangeMin = 0;
    let rangeMax = radix-1;
    // Get maximum value to get the number of rounds
    var maxVal = arr[0];
    for( let i=1; i<arr.length; i++ ){
        if( arr[i] > maxVal ) maxVal = arr[i];
    }
    // Calculate the number of rounds
    const rounds = Math.ceil((Math.log2(maxVal)/Math.log2(radix)));
    // Loop for the number of rounds from least significant digit to most significant
    var arrRound = arr;
    for( let i=0; i<rounds; i++ ){
        arrRound = _radixSortRound(arrRound,radix,i,rangeMin,rangeMax);
    }
    return arrRound;
}

function _extractRadixDigit(number: number,radix,digitOffset){
    let divider = Math.pow(radix,digitOffset);
    return (Math.floor(number/divider))%radix;
}


function _radixSortRound(arrIn,radix,digitOffset,rangeMin,rangeMax){
    if( rangeMax < rangeMin ) return arrIn;
    // Allocate auxilary array and frequency array
    let range = rangeMax-rangeMin+1;
    let arrFreq = new Array(range);
    var arrOut = new Array(arrIn.length);
    // Initialize frequency array with zeros
    for( let i=0; i<arrFreq.length; i++ ){
        arrFreq[i] = 0;
    }
    // Fill in the frequencies
    var currDigit = 0;
    for( let i=0; i<arrIn.length; i++ ){
        currDigit = _extractRadixDigit(arrIn[i]-rangeMin,radix,digitOffset);
        arrFreq[ currDigit ]++;
    }
    // Convert frequencies to indexes (for lookup assignment later)
    var currIndex = -1;
    var arrIndexes = new Array(range);
    for( let i=0; i<arrFreq.length; i++ ){
        currIndex += arrFreq[i];
        arrIndexes[i] = currIndex;
    }
    // Lookup and move from input array to output array
    var currDigit = 0;
    var currIndex = 0;
    for( let i=arrIn.length; i>0; i--){
        currDigit = _extractRadixDigit(arrIn[i-1]-rangeMin,radix,digitOffset);
        currIndex = arrIndexes[currDigit];
        arrIndexes[currDigit]--;
        arrOut[currIndex] = arrIn[i-1];
    }
    // return array ordered by digits
    return arrOut;
}

console.info('+----------------------------------------');
console.info('| Redix Sort - create values array:');
var arrValues1 = [ 8,7,6,5,4,3,6,2,6,1,1,2,3,5,6,7,2,3,5,7,9,0 ];
var arrOut1 = radixSort(arrValues1,10);
console.log('|\tarrValues1 =\t'+arrValues1.toString());
console.log('|\tarrOut1 =\t'+arrOut1.toString());

console.info('+----------------------------------------');
console.info('| Redix Sort - create values array:');
var arrValues2 = [ 81,72,63,55,49,31,61,29,67,11,12,23,30,57,61,77,20,38,58,78,99,1 ];
var arrOut2 = radixSort(arrValues2,10);
console.log('|\tarrValues2 =\t'+arrValues2.toString());
console.log('|\tarrOut2 =\t'+arrOut2.toString());

console.info('+----------------------------------------');
console.info('| Redix Sort - create values array:');
var arrValues3 = [ 813,732,631,551,499,319,61,299,677,112,121,230,301,570,61,771,201,389,588,789,998,1 ];
var arrOut3 = radixSort(arrValues3,10);
console.log('|\tarrValues3 =\t'+arrValues3.toString());
console.log('|\tarrOut3 =\t'+arrOut3.toString());

const NUM_OF_ITTERATIONS_S = 1000;
const NUM_OF_ITTERATIONS_M = 2000;
const NUM_OF_ITTERATIONS_L = 5000;
const NUM_OF_ITTERATIONS_XL = 10000;

console.info('+-------------------------------------------------------------------------------+');
console.info('| Performamce measures - Radix Sort 1K, 2K, 5K, 10K sorts:');
console.info('+-------------------------------+---------------+-------+---------------+-------+');
console.log('| Data Structure\t\t| T-Shirt\t| Size\t| Find \t\t| Errs\t|');
console.log("|\t\t\t\t|\t\t|\t| (in msec)\t|\t|");
console.info('+-------------------------------+---------------+-------+---------------+-------+');

function getSizeByTShirt(tShiftSz: string){
    let sz = 0;
    if( 'XL' === tShiftSz ){
        sz = NUM_OF_ITTERATIONS_XL;
    } else if( 'L' === tShiftSz ){
        sz = NUM_OF_ITTERATIONS_L;
    } else if( 'M' === tShiftSz ){
        sz = NUM_OF_ITTERATIONS_M;
    } else if( 'S' === tShiftSz ){
        sz = NUM_OF_ITTERATIONS_S;
    }
    return sz;
}

function initializeInputArray(sz){
    var currValue = 0;
    var arrInputs = new Array();
    for(let i=0;i<sz; i++ ){
        arrInputs.push(Math.floor(Math.random()*10000));
    }
    return arrInputs;
}

function getNumberWithScaleByTShirt(tShiftSz){
    let outStr = '0';
    if( 'XL' === tShiftSz ){
        outStr = '10K';
    } else if( 'L' === tShiftSz ){
        outStr = '5K';
    } else if( 'M' === tShiftSz ){
        outStr = '2K';
    } else if( 'S' === tShiftSz ){
        outStr = '1K';
    }
    return outStr;
}

function generateStatsLine(tstName,shirtSz,tFindStart,tFindComplete,countErrors){
    let strStats = '| '+tstName+'\t\t| ';
    strStats += shirtSz+'\t\t| ';
    strStats += getNumberWithScaleByTShirt(shirtSz);
    strStats += '\t| ';
    strStats += (tFindComplete - tFindStart);
    strStats += '\t\t| ';
    strStats += countErrors+'\t|';
    return strStats;
}


function runPerformanceTestRadixSort(tstName,shirtSz){
    let sz = getSizeByTShirt(shirtSz);
    if( sz == 0 ) return;
    // prepare inputs
    var arrInputs = initializeInputArray(sz);
    var currValue = 0;
    var arrOutput = [];
    var countErrors = 0;
    const tSortStart = Date.now();
    for(let i=0;i<1000;i++){
        arrOutput = radixSort(arrInputs,10);
    }
    const tSortComplete = Date.now();
    // Build statistics msg
    let strStats = generateStatsLine(
        tstName,
        shirtSz,
        tSortStart,
        tSortComplete,
        countErrors
        );
    console.log(strStats);
}

runPerformanceTestRadixSort('Radix Sort\t','S');
runPerformanceTestRadixSort('Radix Sort\t','M');
runPerformanceTestRadixSort('Radix Sort\t','L');
runPerformanceTestRadixSort('Radix Sort\t','XL');
console.info('+-------------------------------+---------------+-------+---------------+-------+');