//WAP that calculates the perimeter of a square. Prompt the user to enter the length of side,  then display  the perimeter .

const readlineSync = require('readline-sync');


let sideLength = (readlineSync.question('Enter the length of the side of the square: '));

let perimeter = 4 * sideLength;


console.log('The perimeter of the square with side length', sideLength, 'is:', perimeter);