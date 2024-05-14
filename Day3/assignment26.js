//WAP to mul one positive and one negative number;

const readlinesync = require ("readline-sync")

let number1 = readlinesync.questionInt("enter number 1..?")
let number2 = readlinesync.questionInt("enter number 2..?")
let multiplication = number1 * number2;

console.log(" multiplication of "+number1+  " and " +number2+  " is " + multiplication)