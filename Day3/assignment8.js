//WAP identifying the boolean data from your facebook profile, declare variables and assign values. Print them profile

const readlineSync = require('readline-sync');


let ProfilePicture = readlineSync.question('Do you have a profile picture? (yes or no): ');
let CoverPhoto = readlineSync.question('Do you have a cover photo? (yes or no): ');



console.log("Facebook Profile Information:");
console.log(" Profile Picture:", ProfilePicture);
console.log(" Cover Photo:", CoverPhoto);
