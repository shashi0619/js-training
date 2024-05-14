//WAP to div two negative numbers;

const readlineSync = require("readline-sync");

let firstNegativeNumber = (readlineSync.question("Enter the first negative number: "));
let secondNegativeNumber = (readlineSync.question("Enter the second negative number: "));

let result = firstNegativeNumber / secondNegativeNumber;
console.log("The result of dividing", firstNegativeNumber, "by", secondNegativeNumber, "is:", result);