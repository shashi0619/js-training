//WAP to add three numbers;

const readlineSync = require('readline-sync');


let firstNumber = (readlineSync.question('Enter the first number: '));


let secondNumber = (readlineSync.question('Enter the second number: '));


let thirdNumber = (readlineSync.question('Enter the third number: '));


let sum = firstNumber + secondNumber + thirdNumber;


console.log('The sum of', firstNumber + ',', secondNumber + ', and', thirdNumber + ' is:', sum);