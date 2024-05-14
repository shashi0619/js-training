//WAP to div one negative and one postive number;

const readlineSync = require("readline-sync");

let negativeNumber = (readlineSync.question("Enter the negative number: "));
let positiveNumber = (readlineSync.question("Enter the positive number: "));


let result = negativeNumber / positiveNumber;
console.log("The result of dividing", negativeNumber, "by", positiveNumber, "is:", result);