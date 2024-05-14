//WAP to get remainder of  one positive and one negative number;

const readlineSync = require("readline-sync");

let positiveNumber = (readlineSync.question("Enter the positive number: "));
let negativeNumber = (readlineSync.question("Enter the negative number: "));


let remainder = positiveNumber % negativeNumber;

console.log("The remainder of dividing", positiveNumber, "by", negativeNumber, "is:", remainder);