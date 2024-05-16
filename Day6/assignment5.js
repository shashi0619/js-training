//WAP to find the if three number are equal

const readline = require('readline-sync');

const num1 = readline.question("Enter the first number: ");
const num2 = readline.question("Enter the second number: ");
const num3 = readline.question("Enter the third number: ");

if (num1,num2,num3)
    if (num1 === num2 && num2 === num3)
    {
        console.log("All three numbers are equal.");
    }
    
    if (num1 !== num2 || num2 !== num3)
     {
        console.log("Not all three numbers are equal.");
    }
    console.log (" end of if  ")
