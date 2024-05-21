//Given the ages of wife and husband in three families,  WAP to find which family has maximum average age

const readlineSync = require("readline-sync");


const wifeAge1 = readlineSync.question("Enter the age of the wife in the first family: ");
const husbandAge1 = readlineSync.question("Enter the age of the husband in the first family: ");


const avgAge1 = (wifeAge1 + husbandAge1) / 2;

const wifeAge2 = readlineSync.question("Enter the age of the wife in the second family: ");
const husbandAge2 = readlineSync.question("Enter the age of the husband in the second family: ");


const avgAge2 = (wifeAge2 + husbandAge2) / 2;

const wifeAge3 = readlineSync.question("Enter the age of the wife in the third family: ");
const husbandAge3 = readlineSync.question("Enter the age of the husband in the third family: ");


const avgAge3 = (wifeAge3 + husbandAge3) / 2;

if (avgAge1 > avgAge2 && avgAge1 > avgAge3) {
    console.log("The first family has the maximum average age.");
} else if (avgAge2 > avgAge1 && avgAge2 > avgAge3) {
    console.log("The second family has the maximum average age.");
} else if (avgAge3 > avgAge1 && avgAge3 > avgAge2) {
    console.log("The third family has the maximum average age.");
}

