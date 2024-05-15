//Given the expenses and earnings of two families  WAP to find who has more savings

const readlineSync = require("readline-sync");


const earnings1 = readlineSync.question("Enter the earnings of the first family: ");
const expenses1 = readlineSync.question("Enter the expenses of the first family: ");


const savings1 = earnings1 - expenses1;


const earnings2 = readlineSync.question("Enter the earnings of the second family: ");
const expenses2 = readlineSync.question("Enter the expenses of the second family: ");


const savings2 = earnings2 - expenses2;


if (savings1 > savings2)
    
{
    console.log("The first family has more savings.");
}
else 
{  
console.log("The second family has more savings.");
} 
 
console.log (" end of if else ")
