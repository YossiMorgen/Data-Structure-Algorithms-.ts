// export function ATOIRecursion(str: string, n: number = 0): number{
//     let num = +str.charAt(n)
//     if(!str.charAt(n + 1)){return num}

//     num *= 10;
//     console.log("num: " + num);
//     num += ATOIRecursion(str, n + 1)
//     console.log("n:", n);
    
    
//     return num;
// }

export function ATOILoop(str: string, n: number = 0){
    let num = +str.charAt(0);
    for(let i = 1; i < str.length; i++ ){
        num *= 10;
        num += +str.charAt(i)
    }

    return num
}