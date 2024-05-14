//WAP to add two string and print it;

const readlineSync = require('readline-sync');


let firstString = readlineSync.question('Enter the first string: ');


let secondString = readlineSync.question('Enter the second string: ');


let concatenatedString = firstString + secondString;


console.log('concatenatedString:',concatenatedString);