//WAP to add "Virat" and "Kohli" to get "Virat Kohli"; (mind the space in the result);

const readlineSync = require('readline-sync');


let firstName = readlineSync.question('Enter the first name: ');


let lastName = readlineSync.question('Enter the last name: ');

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);