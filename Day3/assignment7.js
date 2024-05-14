//WAP identifying the number data from your facebook profile, declare variables and assign values. Print them profile


const readlinesync = require ("readline-sync");

let age = readlinesync.question(" Your Age : ");
let Friends = readlinesync.question(" Your No Of Friends : ");
let posts = readlinesync.question(" Your No Of Posts : ");
let comments = readlinesync.question(" Your No Of Comments : ");

console.log("profile =>");
console.log(" Your Age "+age)
console.log(" Your No Of Friends "+Friends)
console.log(" Your No Of Posts "+posts)
console.log(" Your No Of Comments  "+comments)