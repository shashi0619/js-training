//WAP identifying the boolean data from your linkedIn profile, declare variables and assign values. Print them profile

const readlineSync = require('readline-sync');


let shashihasPremiumAccount = readlineSync.question('Do you have a premium account? (yes or no): ');
let shashigotOpportunities = readlineSync.question('Do you got an opportunitie? (yes or no): ');

console.log("LinkedIn Profile Information:");
console.log(" Premium Account:", shashihasPremiumAccount);
console.log(" Got Opportunities:", shashigotOpportunities);
