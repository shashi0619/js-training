//Given the sides of two circles  WAP to find the circle with minimum area

const readlineSync = require("readline-sync");


const radius1 = readlineSync.question("Enter the radius of the first circle: ");

const radius2 = readlineSync.question("Enter the radius of the second circle: ");


const area1 = 3.14 * radius1 *radius1;

const area2 = 3.14 * radius2 * radius2;

if (area1 < area2)
     {
    console.log(" The circle with radius "+  radius1," has the minimum area.");
} 

else 
   {
    console.log( "The circle with radius "+ radius2," has the minimum area.");
   }
   
   console.log (" end of if else ")

