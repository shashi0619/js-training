//WAP that calculates the total calories burned during a workout session. Prompt the user to enter the number of calories burned per minute and the duration of the workout in minutes, then display the total calories burned.


const readlineSync = require('readline-sync');


let caloriesPerMinute = (readlineSync.question('Enter the number of calories burned per minute: '));
let durationInMinutes = (readlineSync.question('Enter the duration of the workout in minutes: '));


let totalCaloriesBurned = caloriesPerMinute * durationInMinutes;

console.log('Total calories burned:', totalCaloriesBurned.toFixed(2));