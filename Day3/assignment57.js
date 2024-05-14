//WAP to AND three boolean;

const readlineSync = require('readline-sync');


let booleanValue1 = readlineSync.question('Enter the first boolean value (true or false): ');


let booleanValue2 = readlineSync.question('Enter the second boolean value (true or false): ');


let booleanValue3 = readlineSync.question('Enter the third boolean value (true or false): ');


let result = booleanValue1 && booleanValue2 && booleanValue3;

console.log("Result of AND operation:", result);
