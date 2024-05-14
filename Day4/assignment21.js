//WAP a program to calculate the final bill amount including tax and tip at a restaurant. Prompt the user to enter the subtotal, tax rate, and tip percentage, then display the total bill amount.

const readlineSync = require('readline-sync');


let subtotal = (readlineSync.question('Enter the subtotal: '));
let taxRate = (readlineSync.question('Enter the tax rate (in percentage): '));
let tipPercentage = (readlineSync.question('Enter the tip percentage (in percentage): '));


let taxAmount = (subtotal * taxRate) / 100;


let tipAmount = (subtotal * tipPercentage) / 100;


let totalBillAmount = subtotal + taxAmount + tipAmount;


console.log('Total bill amount:', totalBillAmount.toFixed(2));