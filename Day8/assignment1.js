//WAP to find the age of adult teenager

const readlineSync = require("readline-sync");

const age = readlineSync.question("Enter age : ");
    
    
if(age >= 75) {
    console.log("Senior Citizen");
}
else if(age>=18) {
    console.log("You are an adult!");
}
else if(age>=13) {
    console.log("You are a teenager!");
}
else {
    console.log("You are not an adult!");
}   
		
	
		
	     
				
	
