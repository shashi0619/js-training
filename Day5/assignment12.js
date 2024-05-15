//Given the age of two brother  WAP to find who is elder

const readlineSync = require("readline-sync");


const brother1 = readlineSync.question("Enter the age of the first brother: ");

const brother2 = readlineSync.question("Enter the age of the second brother: ");


if (brother1 > brother2) 
    
    {
    console.log("The first brother is elder.");

}
else
  { console.log (" The second brother is elder." );


  }

  console.log (" end of if else ")
