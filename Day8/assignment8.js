//Write a  program that takes a number from the user and generates an integer between 1 and 7. It displays the weekday name.

const readlineSync = require('readline-sync');


const userInput = readlineSync.questionInt("Enter a number between 1 and 7: ");
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


if (userInput >= 1 && userInput <= 7) {
    
    console.log("The weekday is:", weekdays[userInput - 1]);
} else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}
