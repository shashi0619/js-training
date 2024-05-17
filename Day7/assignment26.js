//Given the distance travelled and time taken by three bike riders , WAP to  find who has travelled with more speed

const readlineSync = require("readline-sync");

const distance1 = readlineSync.question("Enter the distance traveled by the first bike rider (in km): ");
const time1 = readlineSync.question("Enter the time taken by the first bike rider (in hours): ");
const bike_speed1 = distance1 / time1;

const distance2 = readlineSync.question("Enter the distance traveled by the second bike rider (in km): ");
const time2 = readlineSync.question("Enter the time taken by the second bike rider (in hours): ");
const bike_speed2 = distance2 / time2;

const distance3 = readlineSync.question("Enter the distance traveled by the third bike rider (in km): ");
const time3 = readlineSync.question("Enter the time taken by the third bike rider (in hours): ");
const bike_speed3 = distance3 / time3;

let fastestRider;

if (bike_speed1 > bike_speed2 && bike_speed1 > bike_speed3) {
    fastestRider = "The first bike rider";
} else {
    if (bike_speed2 > bike_speed1 && bike_speed2 > bike_speed3) {
        fastestRider = "The second bike rider";
    } else {
        if (bike_speed3 > bike_speed1 && bike_speed3 > bike_speed2) {
            fastestRider = "The third bike rider";
        } 
    }
}

if (fastestRider !== undefined) {
    console.log(fastestRider + " traveled with more speed.");
}
