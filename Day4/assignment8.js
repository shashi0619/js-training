//WAP to calculate the simple interest, prompt the user to under the principle, interest rate and period. display the interest amount and total accumulated.


const readlineSync = require('readline-sync');


let principal = (readlineSync.question('Enter the principal amount: '));

let rate = (readlineSync.question('Enter the annual interest rate (in percentage): '));


let time = (readlineSync.question('Enter the period (in years): '));

let simpleInterest = (principal * rate * time) / 100;


let totalAmount = principal + simpleInterest;