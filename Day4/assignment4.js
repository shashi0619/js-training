//WAP that calculates the area of a rectangle. Prompt the user to enter the length and width, then display  the area .

const readlineSync = require('readline-sync');


let length = parseFloat(readlineSync.question('Enter the length of the rectangle: '));


let width = parseFloat(readlineSync.question('Enter the width of the rectangle: '));


let area = length * width;


console.log('The area of the rectangle with length', length, 'and width', width, 'is:', area);
