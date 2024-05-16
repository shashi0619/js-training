//Given the Principle amount deposited in FD , interest rate and tenure of two persons, find who got more Interest

const readlineSync = require("readline-sync");

const principleAmountPerson1 = readlineSync.question("Enter the principle amount of first person: ");
const interestRatePerson1 = readlineSync.question("Enter the interest rate of first person: ");
const tenurePerson1 = readlineSync.question("Enter the tenure of first person: ");
const interestOfPerson1 = (principleAmountPerson1 * interestRatePerson1 * tenurePerson1) / 100;

const principleAmountPerson2 = readlineSync.question("Enter the principle amount of second person: ");
const interestRatePerson2 = readlineSync.question("Enter the interest rate of second person: ");
const tenurePerson2 = readlineSync.question("Enter the tenure of second person: ");
const interestOfPerson2 = (principleAmountPerson2 * interestRatePerson2 * tenurePerson2) / 100;

if (interestOfPerson1 > interestOfPerson2) {
    console.log("First person got more interest: " + interestOfPerson1);
}
if (interestOfPerson2 > interestOfPerson1) {
    console.log("Second person got more interest: " + interestOfPerson2);
}

console.log (" end of if ")

