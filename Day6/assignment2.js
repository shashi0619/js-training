//WAP to find the minimum of  three numbers by taking them as input from console

const readlineSync = require ("readline-sync");

const number1 = readlineSync.question(" number 1 :");

const number2 = readlineSync.question(" number 2 :");

const number3 = readlineSync.question(" number 3 :");

// find the minimum of  three numbers  number 1 (or) number 2 (or) number 3 ;

if(number1 < number2)
    
    {
    if(number1 > number3)
    {
        console.log(" Number1 is minimum." +number3);
    }
    if(number1 < number3)
    {
        console.log(" Number3 is minimum." +number1);
    }
}
if(number1 > number2)
    
    {
    if(number2 > number3)
        {
        console.log(" Number2 is minimum." +number3);
        }
    if(number2 < number3)
        
    {
        console.log(" Number3 is minimum." +number2);
    }
}