//WAP to find the grade of a student , given his core (0-40 : D, 40-60 : C,60-80:D , 80-100:A)

const readlineSync = require("readline-sync");

const studentscore = readlineSync.question( "Enter the student's score: ");


{
if (studentscore  >= 0) 
    if (studentscore <= 40)
       {
        console.log( "The student's grade is D:");
       }
if (studentscore  >= 40) 
        if (studentscore <= 60)
           {
            console.log( "The student's grade is C:");
           } 
if (studentscore  >= 60) 
    if (studentscore <= 80)
            {
            console.log( "The student's grade is B:");
             } 
if (studentscore  >= 80) 
    if (studentscore <= 100)
         {
        console.log( "The student's grade is A:");
         }                          
}

console.log (" end of if ")