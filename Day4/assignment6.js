//WAP that calculates the area of a square. Prompt the user to enter the length of side, then display  the area .

const readlineSync = require('readline-sync');


let sideLength = (readlineSync.question('Enter the length of the side of the square: '));


let area = sideLength * sideLength;


console.log('The area of the square with side length', sideLength, 'is:', area);
