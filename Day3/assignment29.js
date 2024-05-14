//WAP to div two positive numbers ;

const readlineSync = require("readline-sync");


let dividend = readlineSync.questionFloat(readlineSync.question("Enter the dividend (positive number): "));
let divisor = readlineSync.questionFloat(readlineSync.question("Enter the divisor (positive number): "));


let result = dividend / divisor;


console.log("The result of dividing", dividend, "by", divisor, "is:", result);