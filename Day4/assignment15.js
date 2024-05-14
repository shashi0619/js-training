//WAP to compute the radius of circle given its perimeter

const readlineSync = require('readline-sync');


let perimeter = (readlineSync.question('Enter the perimeter of the circle: '));


let radius = perimeter / (2 * Math.PI);


console.log('The radius of the circle:', radius.toFixed(2));