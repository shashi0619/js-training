//WAP to add one empty string and one non empty string;

const readlineSync = require('readline-sync');

let nonEmptyString = readlineSync.question('Enter a non-empty string: ');


let emptyString = "";


let concatenatedString = emptyString + nonEmptyString;


console.log('Concatenated string:', concatenatedString);