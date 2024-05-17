// WAP to find the maximum of three numbers by taking them as input from console

const readlineSync = require ("readline-sync");

const number1 = readlineSync.question(" number 1 :");

const number2 = readlineSync.question(" number 2 :");

const number3 = readlineSync.question(" number 3 :");

if (number1 >= number2) {
    if (number1 >= number3) {
       
        console.log("Number 1 is maximum: " + number1);
    }
}
if (number2 >= number1) {
    if (number2 >= number3) {
        
        console.log("Number 2 is maximum: " + number2);
    }
}
if (number3 >= number1) {
    if (number3 >= number2) {
        
        console.log("Number 3 is maximum: " + number3);
    }
}
