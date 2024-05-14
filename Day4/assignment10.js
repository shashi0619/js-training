//WAP to calculate the percentage of marks scored by a student in 4 subjects, prompt the user to enter the marks scored and the total marks in each subject and display the percentage

const readlineSync = require('readline-sync');


let marksSubject1 = (readlineSync.question('Enter the marks scored in subject 1: '));
let totalMarksSubject1 = (readlineSync.question('Enter the total marks in subject 1: '));

let marksSubject2 = (readlineSync.question('Enter the marks scored in subject 2: '));
let totalMarksSubject2 = (readlineSync.question('Enter the total marks in subject 2: '));

let marksSubject3 = (readlineSync.question('Enter the marks scored in subject 3: '));
let totalMarksSubject3 = (readlineSync.question('Enter the total marks in subject 3: '));

let marksSubject4 = (readlineSync.question('Enter the marks scored in subject 4: '));
let totalMarksSubject4 = (readlineSync.question('Enter the total marks in subject 4: '));


let totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3 + marksSubject4;


let totalMaxMarks = totalMarksSubject1 + totalMarksSubject2 + totalMarksSubject3 + totalMarksSubject4;


let percentage = (totalMarksObtained / totalMaxMarks) * 100;


console.log('Percentage of marks scored:', percentage + '%');
