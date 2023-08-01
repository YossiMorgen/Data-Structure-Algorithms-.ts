export default function arraysExercise1() {
    const StudentFirstNames = ["Lisa", "Karen", "Rihana", "Adel"]
    const StudentLastNames = ["Presley", "Carpenter", "Fenty", "Adkins"]
    const StudentGrades = [50, 79, 85, 85]

    let avg = 0.0;
    for (let i = 0; i < StudentGrades.length; i++) {
        console.log(StudentFirstNames[i] + " " + StudentLastNames[i] + " is " + StudentGrades[i] + " years old.");
        
        avg += StudentGrades[i];
    }
    avg = avg / StudentGrades.length;
    console.log("The average grade is " + avg );

}