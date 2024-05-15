//Given the ages of wife and husband in two families,  WAP to find which family has maximum average age

const readlineSync = require("readline-sync");


const wifeAge1 = readlineSync.question("Enter the age of the wife in the first family: ");
const husbandAge1 = readlineSync.question("Enter the age of the husband in the first family: ");


const avgAge1 = (wifeAge1 + husbandAge1) / 2;

const wifeAge2 = readlineSync.question("Enter the age of the wife in the second family: ");
const husbandAge2 = readlineSync.question("Enter the age of the husband in the second family: ");


const avgAge2 = (wifeAge2 + husbandAge2) / 2;


if (avgAge1 > avgAge2) {
    console.log("The first family has the maximum average age.");
}
else {
console.log("The second family has the maximum average age.");
} 


console.log (" end of if else ")