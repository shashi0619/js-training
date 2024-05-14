//WAP to compute the marks obtained by a student, given his percentage and total marks

const readlineSync = require('readline-sync');


let percentage = parseFloat(readlineSync.question('Enter the percentage: '));


let totalMarks = parseFloat(readlineSync.question('Enter the total marks: '));


let marksObtained = (percentage * totalMarks) / 100;


console.log('Marks obtained by the student:', marksObtained.toFixed(2));
