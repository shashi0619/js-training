//Given the Principle amount deposited in FD , interest rate and tenure of three persons, find who got more Interest
const readlineSync = require("readline-sync");
const principleAmountPerson1 = readlineSync.question("Enter the priniciple amount of first person:");
const interestRatePerson1 = readlineSync.question("Enter the interest rate of first person:");
const tenurePerson1 = readlineSync.question("Enter the tenure of first person:");
const interestOfPerson1 = (principleAmountPerson1*interestRatePerson1*tenurePerson1)/100;

const principleAmountPerson2 = readlineSync.question("Enter the priniciple amount of second person:");
const interestRatePerson2 = readlineSync.question("Enter the interest rate of second person:");
const tenurePerson2 = readlineSync.question("Enter the tenure of second person:");
const interestOfPerson2 = (principleAmountPerson2*interestRatePerson2*tenurePerson2)/100;

const principleAmountPerson3 = readlineSync.question("Enter the priniciple amount of third person:");
const interestRatePerson3 = readlineSync.question("Enter the interest rate of third person:");
const tenurePerson3 = readlineSync.question("Enter the tenure of third person:");
const interestOfPerson3 = (principleAmountPerson3*interestRatePerson3*tenurePerson3)/100;


if(interestOfPerson1 > interestOfPerson2) {
    if(interestOfPerson1>interestOfPerson3){
        console.log("First person has more interest." +interestOfPerson1);
    }
}
if(interestOfPerson2>interestOfPerson3){
    if(interestOfPerson2>interestOfPerson1){
        console.log("Second person has more interest." +interestOfPerson2);
    }
}
if(interestOfPerson3>interestOfPerson1){
    if(interestOfPerson3>interestOfPerson2){
        console.log("Third person has more interest." +interestOfPerson3);
    }
}
console.log (" end of if ")