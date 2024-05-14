//WAP to sub three numbers

const readlineSync = require('readline-sync');


let firstNumber = (readlineSync.question('Enter the first number: '));

let secondNumber = (readlineSync.question('Enter the second number: '));


let thirdNumber = (readlineSync.question('Enter the third number: '));


let result = firstNumber - secondNumber - thirdNumber;


console.log('The result of subtracting', secondNumber + ' and', thirdNumber + ' from', firstNumber + ' is:', result);