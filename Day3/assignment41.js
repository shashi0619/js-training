//WAP to add one non empty string and one emtpy string;

const readlineSync = require('readline-sync');


let nonEmptyString = readlineSync.question('Enter a non-empty string: ');


let emptyString = "";


let concatenatedString = nonEmptyString + emptyString;


console.log('Concatenated string:', concatenatedString);