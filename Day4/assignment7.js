//WAP that calculates the perimeter of triangle. Prompt the user to enter the sides length, then display the perimeter .

const readlineSync = require('readline-sync');


let side1 = (readlineSync.question('Enter the length of side 1: '));
let side2 = (readlineSync.question('Enter the length of side 2: '));
let side3 = (readlineSync.question('Enter the length of side 3: '));


let perimeter = side1 + side2 + side3;


console.log('The perimeter of the triangle with side lengths', side1 + ',', side2 + ', and', side3 + ' is:', perimeter);
