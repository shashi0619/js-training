//WAP that calculates the total distance covered by a runner during a race. Prompt the user to enter the distance covered in each lap, and no of laps, then display the total distance covered

const readlineSync = require('readline-sync');


let distancePerLap = (readlineSync.question('Enter the distance covered in each lap (in kilometers): '));
let numberOfLaps = (readlineSync.question('Enter the number of laps: '));

let totalDistance = distancePerLap * numberOfLaps;


console.log('Total distance covered:', totalDistance.toFixed(2), 'kilometers');