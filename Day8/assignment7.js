//Write a program  to input 5 numbers from the keyboard and find their sum and average

const readlineSync = require('readline-sync');


const num1 = readlineSync.questionInt("Enter number 1: ");
const num2 = readlineSync.questionInt("Enter number 2: ");
const num3 = readlineSync.questionInt("Enter number 3: ");
const num4 = readlineSync.questionInt("Enter number 4: ");
const num5 = readlineSync.questionInt("Enter number 5: ");




let sum = 0;
let average = 0;




let count = 0;
if (count < 5) {
    
    sum += num1;
    count++;
}

if (count < 5) {
    
    sum += num2;
    count++;
}

if (count < 5) {
    
    sum += num3;
    count++;
}

if (count < 5) {
    
    sum += num4;
    count++;
}

if (count < 5) {
    
    sum += num5;
    count++;
}


average = sum / 5;


console.log("Sum of the numbers:", sum);
console.log("Average of the numbers:", average);
