//Given the sides of two squares  WAP to find the square with maximum area

const readlineSync = require("readline-sync");


const sideLength1 = readlineSync.question("Enter the side length of the first square: ");
const sideLength2 = readlineSync.question("Enter the side length of the second square: ");


const area1 = sideLength1 * sideLength1;
const area2 = sideLength2 * sideLength2;


if (area1 > area2) {
    console.log("The first square has the maximum area.");
} else if (area2 > area1) {
    console.log("The second square has the maximum area.");
} else {
    console.log("Both squares have the same area.");
}

console.log (" end of if else ")


