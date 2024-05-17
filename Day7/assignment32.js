//WAP to find the second largest of the 3 numbers

const readlineSync = require("readline-sync");

const number1 = readlineSync.question("Enter number 1: ");
const number2 = readlineSync.question("Enter number 2: ");
const number3 = readlineSync.question("Enter number 3: ");

if (number1 >= number2 && number1 >= number3) {
    if (number2 >= number3) {
        console.log("Second largest number is: " + number2);
    } else {
        console.log("Second largest number is: " + number3);
    }
} else if (number2 >= number1 && number2 >= number3) {
    if (number1 >= number3) {
        console.log("Second largest number is: " + number1);
    } else {
        console.log("Second largest number is: " + number3);
    }
} else if (number3 >= number1 && number3 >= number2) {
    if (number1 >= number2) {
        console.log("Second largest number is: " + number1);
    } else {
        console.log("Second largest number is: " + number2);
    }
}
