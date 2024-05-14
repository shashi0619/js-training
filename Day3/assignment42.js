//WAP to delcare two boolean values;

const readlineSync = require('readline-sync');


let booleanValue1 = readlineSync.question('Enter the first boolean value : ');


let booleanValue2 = readlineSync.question('Enter the second boolean value : ');

booleanValue1 = booleanValue1.toLowerCase() === 'true';
booleanValue2 = booleanValue2.toLowerCase() === 'true';

console.log("Boolean value 1:", booleanValue1);
console.log("Boolean value 2:", booleanValue2);