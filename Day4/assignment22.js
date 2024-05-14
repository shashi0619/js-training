//WAP that calculates the total distance traveled by a vehicle given the initial and final odometer readings. Prompt the user to enter both readings, then display the total distance traveled.

const readlineSync = require('readline-sync');


let initialReading = (readlineSync.question('Enter the initial odometer reading: '));
let finalReading = (readlineSync.question('Enter the final odometer reading: '));

let totalDistance = finalReading - initialReading;


console.log('Total distance traveled:', totalDistance.toFixed(2), 'kilometers');