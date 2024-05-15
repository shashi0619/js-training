//Given the distance travelled and time taken by two bike riders , WAP to  find who has travelled with more speed

const readlineSync = require("readline-sync");


const distance1 = readlineSync.question("Enter the distance traveled by the first bike rider (in km): ");


const time1 = readlineSync.question("Enter the time taken by the first bike rider (in hours): ");


const bike_speed1 = distance1 / time1;


const distance2 = readlineSync.question("Enter the distance traveled by the second bike rider (in km): ");


const time2 = readlineSync.question("Enter the time taken by the second bike rider (in hours): ");


const bike_speed2 = distance2 / time2;


if (bike_speed1  > bike_speed2 ) 
    {
    console.log("The first bike rider traveled with more speed.");
} 
 else {
    console.log("The second bike rider traveled with more speed.");
}

console.log (" end of if else ")
