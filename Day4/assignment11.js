//WAP to compute the bank balance using simple interest, ask the user to enter the amount deposited, interest rate and time period and then display the profit amount and total

const readlineSync = require('readline-sync');


let principal = readlineSync.questionFloat(readlineSync.question('Enter the amount deposited: '));


let rate = readlineSync.questionFloat(readlineSync.question('Enter the annual interest rate (in percentage): '));


let time = readlineSync.questionFloat(readlineSync.question('Enter the time period (in years): '));


let simpleInterest = (principal * rate * time) / 100;


let totalBalance = principal + simpleInterest;


console.log('Profit amount (Simple Interest):', simpleInterest.toFixed(2));
console.log('Total balance:', totalBalance.toFixed(2));