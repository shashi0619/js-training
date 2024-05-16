// WAP to find the maximum of three numbers by taking them as input from console

const readlineSync = require ("readline-sync");

const number1 = readlineSync.question(" number 1 :");

const number2 = readlineSync.question(" number 2 :");

const number3 = readlineSync.question(" number 3 :");

// find maximum of  number 1 (or) number2 (or) number 3;


{
let maximum;

if ( number1 > number2)
{
            maximum = number1;
}
if (number1 > number3)
    {
            maximum = number1;
    }
if (number1 < number3)
        {
            maximum = number3
        }
if (number1 < number2)
    {
            maximum = number2
    }    
if ( number2 > number3)   
        {
            maximum = number2
        }
if ( number2 < number3)

    {
            maximum = number3
    }
    console.log(maximum)


}