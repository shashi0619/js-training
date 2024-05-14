//WAP to compute the speed of a vehicle , prompt user to enter the no of km travelled and time taken

const readlineSync = require('readline-sync');


let distance = (readlineSync.question('Enter the distance traveled (in kilometers): '));


let time = (readlineSync.question('Enter the time taken (in hours): '));


let speed = distance / time;


console.log('The speed of the vehicle:', speed.toFixed(2), 'km/h');