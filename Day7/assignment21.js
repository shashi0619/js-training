//WAP to find the maximum of two numbers

const readline = require('readline-sync');

const number1 = readline.question("Enter the first number: ");
const number2 = readline.question("Enter the second number: ");

if (number1 > number2) {
    console.log("Number 1 is maximum: " + number1);
} else if (number2 > number1) {
    console.log("Number 2 is maximum: " + number2);
} 