//WAP to show the result of OR operation btween two boolean(true, true) values

const readlineSync = require('readline-sync');

let booleanValue1 = readlineSync.question ("enter the first boolean value")

let booleanValue2 = readlineSync.question("enter the second bollean value")

let result = booleanValue1 || booleanValue2;

console.log("Result of OR operation:", result);