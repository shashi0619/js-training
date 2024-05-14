//WAP to divide two number and show the result;

const readlinesync = require ("readline-sync");

let number1 = readlinesync.questionInt("enter number 1..?");
let number2 = readlinesync.questionInt("enter number 2..?");
let divide = number1 / number2;

console.log(" divide of "+number1+  " and " +number2+  " is " + divide)