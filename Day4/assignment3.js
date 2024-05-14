//WAP that calculates the perimeter of a rectangle. Prompt the user to enter the length and width, then display  the perimeter .

const readlineSync = require('readline-sync');


let length = (readlineSync.question('Enter the length of the rectangle: '));


let width = (readlineSync.question('Enter the width of the rectangle: '));


let perimeter = 2 * (length + width);


console.log('The perimeter of the rectangle with length', length, 'and width', width, 'is:', perimeter);