//WAP to find the minimum of two numbers

const readlineSync = require ("readline-sync");

const number1 = readlineSync.question("Enter the first number:");
const number2 = readlineSync.question("Enter the second number:");


{
if (number1 <= number2)
    

    console.log ( number1 + "  number is minimum "  );
 
if (number1 > number2)

    console.log ( number2 + "  number is minimum "  );
}
