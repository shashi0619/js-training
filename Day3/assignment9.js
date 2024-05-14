//WAP identifying the string data from your linkedIn profile, declare variables and assign values. Print them profile

const readlineSync = require('readline-sync');


let fullName = readlineSync.question('Enter your full name: ');
let location = readlineSync.question('Enter your location: ');



console.log("LinkedIn Profile Information:");
console.log("Full Name:", fullName);
console.log("Location:", location);