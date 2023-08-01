export function freqTable(str: string){
    const infoArr = new Array(10).fill(0);
    
    for(let i = 0; i < str.length; i++){
        infoArr[str.charAt(i)] ++;
    }

    for(let i = 0; i < 10; i++){
        console.log(i + " : " + infoArr[i]);
        
    }
}