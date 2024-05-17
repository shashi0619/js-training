// WAP to find the maximum of three numbers by taking them as input from console (using "if" "else")

const readlineSync = require("readline-sync");

const number1 = readlineSync.question("number 1: ");
const number2 = readlineSync.question("number 2: ");
const number3 = readlineSync.question("number 3: ");

if (number1 >= number2 && number1 >= number3) {
    console.log("Number 1 is maximum: " + number1);
} else if (number2 >= number1 && number2 >= number3) {
    console.log("Number 2 is maximum: " + number2);
} else {
    console.log("Number 3 is maximum: " + number3);
}

console.log("end of if");
