//WAP to determine the total salary of an employee based on their hourly rate and the number of hours worked. Prompt the user to enter the hourly rate and hours worked, then display the total salary.

const readlineSync = require('readline-sync');


let hourlyRate = (readlineSync.question('Enter the hourly rate: '));
let hoursWorked = (readlineSync.question('Enter the number of hours worked: '));


let totalSalary = hourlyRate * hoursWorked;


console.log('Total salary:', totalSalary.toFixed(2));
