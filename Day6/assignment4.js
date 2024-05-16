//WAP to find the minimum of two numbers


const readline = require('readline-sync');

const num1 = readline.question("Enter the first number:");
const num2 = readline.question("Enter the second number:");


{
if (num1 <= num2)
    

    console.log ( num1 + "  number is minimum "  );
 
if (num1 > num2)

    console.log ( num2 + "  number is minimum "  );
}


console.log (" end of if  ")