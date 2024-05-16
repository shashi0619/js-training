//WAP to find if people can stepout of house based on the temperature  (< -10 : No, -10 to 0: only urgent, 0 to 40 : can stepout , 40 to 50: only urgent , 50> no)

const readlineSync = require("readline-sync");

const temperature = readlineSync.question( "Enter the temperature: ");


{
if (temperature  >= -0) 
    if (temperature <= -10)
       {
        console.log( "Can people step out based on the temperature? : no");
       }
if (temperature  >= -10) 
        if (temperature <= 0)
           {
            console.log( "Can people step out based on the temperature? : only urgent");
           } 
if (temperature  >= 0) 
    if (temperature <= 40)
            {
            console.log("Can people step out based on the temperature? : can step out ");
             } 
if (temperature  >= 40) 
    if (temperature <= 50)
         {
        console.log( "Can people step out based on the temperature? : only urgent");
         }   
         
if (temperature  >= 50) 
    
      {
        console.log( "Can people step out based on the temperature? : no ");
         }        
}

console.log (" end of if ")