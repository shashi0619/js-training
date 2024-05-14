//WAP that calculates the area of a circle. Prompt the user to enter the radius, then display both the area.

const readlineSync = require('readline-sync');


let radius = (readlineSync.question('Enter the radius of the circle: '));


let area = Math.PI * radius * radius;


console.log('The area of the circle with radius', radius, 'is:', area);
