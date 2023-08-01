export default function arraysExercise3(arr: Array<any>, val: any, occurrence? : number){
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            if( !occurrence || occurrence === 1 ){
                index = i;
                break;
            }
            occurrence--;
        }
    }

    console.log(index);
}