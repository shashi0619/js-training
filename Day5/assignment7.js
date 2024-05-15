//WAP to find the if two number are equal by taking numbers as input


const readlineSync = require("readline-sync");


const number1 = readlineSync.question("Enter the first number: ");
const number2 = readlineSync.question("Enter the second number: ");



if (number1 == number2) 
    {
    console.log( number1 + " The two numbers are equal.");
}

else  
{
    console.log( number2 + " The two numbers are not equal."); 
}

console.log (" end of if else ")