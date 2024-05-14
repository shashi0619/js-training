//WAP to calculate the percentage of marks scored by a student 3 subjects. Prompt for the marks scored in each subject and assume max marks is 100 in each subject

const readlineSync = require('readline-sync');


let subject1 = (readlineSync.question('Enter the marks scored in subject 1 (out of 100): '));
let subject2 = (readlineSync.question('Enter the marks scored in subject 2 (out of 100): '));
let subject3 = (readlineSync.question('Enter the marks scored in subject 3 (out of 100): '));


let totalMarksObtained = subject1 + subject2 + subject3;


let totalMaxMarks = 100 * 3;


let percentage = (totalMarksObtained / totalMaxMarks) * 100;


console.log('Percentage of marks scored:', percentage.toFixed(2) + '%');