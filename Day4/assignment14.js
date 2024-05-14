//WAP to compute the radius of circle, given its area


const readlineSync = require('readline-sync');


let area = (readlineSync.question('Enter the area of the circle: '));


let radius = Math.sqrt(area / Math.PI);


console.log('The radius of the circle:', radius.toFixed(2));