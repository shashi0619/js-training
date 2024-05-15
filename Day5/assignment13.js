//Given the age of two foods  WAP to find out which is more rotten

const readlineSync = require("readline-sync");


const food1 = readlineSync.question("Enter the age of the first food: ");

const food2 = readlineSync.question("Enter the age of the second food: ");


if (food1 > food2) 
{
console.log("The first food is more rotten.")
}
else
{
 console.log("The second food is more rotten.")
}

console.log (" end of if else ")
