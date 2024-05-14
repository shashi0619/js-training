//Write a program to calculate the total cost of purchasing 5 items from a store. Prompt the user to enter the prices of each item and  then display the total cost.

const readlineSync = require('readline-sync');


let totalCost = 0;


let price1 = (readlineSync.question('Enter the price of item 1: '));
let price2 = (readlineSync.question('Enter the price of item 2: '));
let price3 = (readlineSync.question('Enter the price of item 3: '));
let price4 = (readlineSync.question('Enter the price of item 4: '));
let price5 = (readlineSync.question('Enter the price of item 5: '));


totalCost = price1 + price2 + price3 + price4 + price5;


console.log('Total cost of purchasing 5 items:', totalCost.toFixed(2));