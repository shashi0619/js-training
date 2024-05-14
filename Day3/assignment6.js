//WAP identifying the string data from your facebook profile, declare variables and assign values. Print them profile


const readlinesync = require ("readline-sync");

let name = readlinesync.question(" user name : ");
let mail = readlinesync.question(" your email : ");
let password = readlinesync.question(" your password : ");
let location = readlinesync.question(" your location : ");


console.log(" user name is "+name)
console.log(" your email "+mail)
console.log(" your password "+password)
console.log(" your loaction "+location)