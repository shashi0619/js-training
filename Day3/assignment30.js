//WAP to div one positive and one negative number;

const readlineSync = require("readline-sync");


let positiveNumber = readlineSync.question("Enter the positive number: ");
let negativeNumber = readlineSync.question("Enter the negative number: ");


let result = positiveNumber / negativeNumber;


console.log("The result of dividing", positiveNumber, "by", negativeNumber, "is:", result);