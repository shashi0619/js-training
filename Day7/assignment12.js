//WAP to find the grade of a student , given his core (0-40 : D, 40-60 : C,60-80:D , 80-100:A)

const readlineSync = require("readline-sync");

const studentscore = readlineSync.question( "Enter the student's score: ");

if (studentscore >= 0 && studentscore < 40) {
    console.log("The student's grade is D:");
}
if (studentscore >= 40 && studentscore < 60) {
    console.log("The student's grade is C:");
}
if (studentscore >= 60 && studentscore < 80) {
    console.log("The student's grade is B:");
}
if (studentscore >= 80 && studentscore <= 100) {
    console.log("The student's grade is A:");
}
if (studentscore < 0 || studentscore > 100) {
    console.log("Invalid score entered. Score must be between 0 and 100.");
}


