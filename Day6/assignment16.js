//Given four number find the minimum

const readlineSync = require("readline-sync");

const num1 = readlineSync.question("Enter number 1: ");
const num2 = readlineSync.question("Enter number 2: ");
const num3 = readlineSync.question("Enter number 3: ");
const num4 = readlineSync.question("Enter number 4: ");


if ( num1 <= num2){
    if( num1 <= num3){
        if ( num1 <= num4)
            console.log( " the minimum is :"+num1)
    }
}

if ( num2 <= num1){
    if( num2 <= num3){
        if ( num2 <= num4)
            console.log( " the minimum is :"+num2)
    }
}

if ( num3 <= num1){
    if( num3 <= num2){
        if ( num3 <= num4)
            console.log( " the minimum is :"+num3)
    }
}

if ( num4 <= num1){
    if( num4 <= num2){
        if ( num4 <= num3)
            console.log( " the minimum is :"+num4)
    }
}

console.log (" end of if ")