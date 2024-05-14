//WAP to compute the distance travelled, given the average speed of vehicle and time taken

const readlineSync = require('readline-sync');


let speed = (readlineSync.question('Enter the average speed of the vehicle (in km/h): '));


let time = (readlineSync.question('Enter the time taken (in hours): '));

let distance = speed * time;


console.log('The distance traveled:', distance.toFixed(2), 'kilometers');