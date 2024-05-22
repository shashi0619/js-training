//WAP to Check the number is negative, zero, or positive


const readlineSync = require('readline-sync');


const number = readlineSync.questionFloat("Enter a number: ");


if (number < 0) {
    console.log("The number is negative.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is positive.");
}


