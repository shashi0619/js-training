//WAP that calculates the perimeter of a circle. Prompt the user to enter the radius, then display  the perimeter .

const readlineSync = require('readline-sync');

const radius = readlineSync.questionFloat("Enter the radius of the circle: ");

const perimeter = 2 * Math.PI * radius;

console.log("The perimeter of the circle is: " + perimeter);