//WAP to mul one negative and one postive number;

const readlineSync = require("readline-sync");

let negativeNumber = readlineSync.questionFloat(readlineSync.question("Enter the negative number: "));
let positiveNumber = readlineSync.questionFloat(readlineSync.question("Enter the positive number: "));


let result = negativeNumber * positiveNumber;


console.log("The result of multiplying", negativeNumber, "and", positiveNumber, "is:", result);