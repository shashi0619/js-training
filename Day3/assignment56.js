//WAP to add three string

const readlineSync = require('readline-sync');


let firstString = readlineSync.question('Enter the first string: ');
let secondString = readlineSync.question('Enter the second string: ');
let thirdString = readlineSync.question('Enter the third string: ');




let result = firstString + secondString + thirdString;

console.log('Concatenated string:', result);