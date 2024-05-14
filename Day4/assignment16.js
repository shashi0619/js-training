//WAP to compute the rate of interest  given the initial amount, final amount and period

const readlineSync = require('readline-sync');


let principal = (readlineSync.question('Enter the initial amount: '));


let finalAmount = (readlineSync.question('Enter the final amount: '));


let time = (readlineSync.question('Enter the period (in years): '));


let simpleInterest = finalAmount - principal;


let rate = simpleInterest / (principal * time);


console.log('The rate of interest:', (rate * 100).toFixed(2) + '%');
