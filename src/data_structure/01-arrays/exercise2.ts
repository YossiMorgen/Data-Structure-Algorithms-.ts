export default function arraysExercise2(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const search = 5;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            index = i;
            break;
        }
    }

    console.log(index);

}