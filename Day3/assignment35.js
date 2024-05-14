//WAP to get remainder of  two negative numbers;

const readlineSync = require("readline-sync");

let firstNegativeNumber = (readlineSync.question("Enter the first negative number: "));
let secondNegativeNumber = (readlineSync.question("Enter the second negative number: "));


let remainder = firstNegativeNumber % secondNegativeNumber;

console.log("The remainder of dividing", firstNegativeNumber, "by", secondNegativeNumber, "is:", remainder);