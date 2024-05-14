//WAP to mul two negative numbers;

const readlineSync = require("readline-sync");


let number1 =readlineSync.questionFloat(readlineSync.question("Enter the first negative number: "));
let number2 = readlineSync.questionFloat(readlineSync.question("Enter the second negative number: "));

let result = number1 * number2;

console.log("The result of multiplying", number1, "and", number2, "is:", result);