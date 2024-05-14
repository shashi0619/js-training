//Write a program to calculate the total cost of purchasing 5 items from a store. Prompt the user to enter the prices of each item and the quantity purchased, then display the total cost.

const readlineSync = require('readline-sync');


let totalCost = 0;


let price1 = (readlineSync.question('Enter the price of item 1: '));
let quantity1 =(readlineSync.question('Enter the quantity of item 1: '));

let price2 = (readlineSync.question('Enter the price of item 2: '));
let quantity2 =(readlineSync.question('Enter the quantity of item 2: '));

let price3 = (readlineSync.question('Enter the price of item 3: '));
let quantity3 = (readlineSync.question('Enter the quantity of item 3: '));

let price4 = (readlineSync.question('Enter the price of item 4: '));
let quantity4 = (readlineSync.question('Enter the quantity of item 4: '));

let price5 = (readlineSync.question('Enter the price of item 5: '));
let quantity5 = (readlineSync.question('Enter the quantity of item 5: '));


totalCost = (price1 * quantity1) + (price2 * quantity2) + (price3 * quantity3) + (price4 * quantity4) + (price5 * quantity5);


console.log('Total cost of purchasing 5 items:', totalCost.toFixed(2));
