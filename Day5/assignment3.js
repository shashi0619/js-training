//WAP to find the maximum of two numbers by taking them as input

const readlineSync = require("readline-sync");

const number1 = readlineSync.question("Enter the first number: ");
const number2 = readlineSync.question("Enter the second number: ");

let maximum;
if (number1 >= number2) {
    console.log ( number1 + "  number 1  is maximum "  );
} else {
    console.log ( number2 + "  number 2  is maximum "  );
}

console.log (" end of if else ")









