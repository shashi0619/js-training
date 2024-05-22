//Find the number of days in a month

const readlineSync = require('readline-sync');

var inputMonth = readlineSync.questionInt("Enter the month (1-12): ");
var inputYear = readlineSync.questionInt("Enter the year: ");

var daysInMonth = 0;

if (inputMonth === 1 || inputMonth === 3 || inputMonth === 5 || inputMonth === 7 || inputMonth === 8 || inputMonth === 10 || inputMonth === 12) {
    daysInMonth = 31;
} else if (inputMonth === 4 || inputMonth === 6 || inputMonth === 9 || inputMonth === 11) {
    daysInMonth = 30;
} else if (inputMonth === 2) {
    if ((inputYear % 400 == 0) || ((inputYear % 4 == 0) && (inputYear % 100 != 0))) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} 

console.log("Number of days in the specified month: " + daysInMonth);
