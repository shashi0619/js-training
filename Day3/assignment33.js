//WAP to get remainder of  two positive numbers ;

const readlineSync = require("readline-sync");

let firstPositiveNumber = (readlineSync.question("Enter the first positive number: "));
let secondPositiveNumber = (readlineSync.question("Enter the second positive number: "));


let remainder = firstPositiveNumber % secondPositiveNumber;
console.log("The remainder of dividing", firstPositiveNumber, "by", secondPositiveNumber, "is:", remainder);