//WAP to calculate the total fuel consumption of a vehicle during a trip. Prompt the user to enter the fuel efficiency and distances traveled for three separate legs of the journey, then display the total fuel consumption.

const readlineSync = require('readline-sync');


let totalFuelConsumption = 0;


let fuelEfficiency1 = (readlineSync.question('Enter the fuel efficiency for leg 1 (in liters per kilometer): '));
let distanceTraveled1 = (readlineSync.question('Enter the distance traveled for leg 1 (in kilometers): '));

let fuelEfficiency2 = (readlineSync.question('Enter the fuel efficiency for leg 2 (in liters per kilometer): '));
let distanceTraveled2 = (readlineSync.question('Enter the distance traveled for leg 2 (in kilometers): '));

let fuelEfficiency3 = (readlineSync.question('Enter the fuel efficiency for leg 3 (in liters per kilometer): '));
let distanceTraveled3 = (readlineSync.question('Enter the distance traveled for leg 3 (in kilometers): '));


totalFuelConsumption = (fuelEfficiency1 * distanceTraveled1) + (fuelEfficiency2 * distanceTraveled2) + (fuelEfficiency3 * distanceTraveled3);

console.log('Total fuel consumption during the trip:', totalFuelConsumption.toFixed(2), 'liters');