//WAP to show the result of AND operation btween two boolean(false, true) values

const readlineSync = require('readline-sync');

let booleanValue1 = readlineSync.question('Enter the first boolean value (true or false): ');

let booleanValue2 = readlineSync.question('Enter the second boolean value (true or false): ');

let result = booleanValue1 && booleanValue2;

console.log("Result of AND operation:", result);