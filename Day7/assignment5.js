//WAP to find the if three number are equal

const readline = require('readline-sync');

const number1 = readline.question("Enter the first number: ");
const number2 = readline.question("Enter the second number: ");
const number3 = readline.question("Enter the third number: ");

if (number1 === number2) {
    if (number1 === number3) {
        console.log("All three numbers are equal.");
    }
}

if (number1 != number2 || number1 != number3) {
    console.log("The numbers are not equal.");
}
