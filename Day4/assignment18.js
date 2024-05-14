//WAP to compute the electricity bill of a house, given the no of units consumed and per unit price

const readlineSync = require('readline-sync');


let unitsConsumed = (readlineSync.question('Enter the number of units consumed: '));

let perUnitPrice = (readlineSync.question('Enter the per unit price: '));


let electricityBill = unitsConsumed * perUnitPrice;


console.log('Electricity bill:', electricityBill.toFixed(2));