//Given the expenses of two families , WAP to find who has spends more

const readlineSync = require("readline-sync");


const expenses1 = readlineSync.question("Enter the total expenses of the first family: ");


const expenses2 = readlineSync.question("Enter the total expenses of the second family: ");


if (expenses1 > expenses2) 
    
    {
    console.log("The first family spends more.");
} 

else 
{
    console.log("The second family spends more.");
} 
  
console.log (" end of if else ")