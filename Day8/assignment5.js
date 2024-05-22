//Write a Java program to display the multiplication table of a given integer.

const readlineSync = require('readline-sync');


const number = readlineSync.questionInt("Enter the number for multiplication table: ");


console.log("Multiplication Table of", number)
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}




