//Given the sides of three squares WAP to find the square with maximum area

const readlineSync = require("readline-sync");

const sideLength1 = readlineSync.question("Enter the side length of the first square: ");
const sideLength2 = readlineSync.question("Enter the side length of the second square: ");
const sideLength3 = readlineSync.question("Enter the side length of the third square: ");

const area1 = sideLength1 * sideLength1;
const area2 = sideLength2 * sideLength2;
const area3 = sideLength3 * sideLength3;

if (area1 <= area2 && area1 <= area3) {
    console.log("The first square has the minimum area: " + area1);
}
if (area2 <= area1 && area2 <= area3) {
    console.log("The second square has the minimum area: " + area2);
}
else {
    console.log("The third square has the minimum area: " + area3);
}
