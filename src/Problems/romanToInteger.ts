export default function romanToInt(s: string): number {

    const romanMap = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ])

    let num = romanMap.get(s[0]);
    let prev = num;

    for(let i = 1; i < s.length; i ++){
        const val = romanMap.get(s[i])
        // console.log(i, val, num);
        num += val
        if(prev < val ){
            num -= prev * 2
        }

        prev = val
    }

    return num;
}