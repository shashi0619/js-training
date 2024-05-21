//Write a program to check whether a entered character is lowercase ( a to z ) or uppercase ( A to Z ).

const readlineSync = require('readline-sync');

const character = readlineSync.question("Enter a character: ");

if (character >= 'a' && character <= 'z') {
    console.log("The entered character is lowercase.");
} else if (character >= 'A' && character <= 'Z') {
    console.log("The entered character is uppercase.");
} else {
    console.log("The entered character is not a letter.");
}



