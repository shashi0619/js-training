//WAP to get remainder of  one negative and one postive number;

const readlineSync = require("readline-sync");

let negativeNumber = (readlineSync.question("Enter the negative number: "));
let positiveNumber = (readlineSync.question("Enter the positive number: "));


let remainder = negativeNumber % positiveNumber;

console.log("The remainder of dividing", negativeNumber, "by", positiveNumber, "is:", remainder);