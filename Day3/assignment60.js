//WAP to print your FB profile in readable form, seperate by commas ( "Name : Hari, City : Hyderbad, No Of friends : 200 ....... ")

const readlineSync = require('readline-sync');


let name = readlineSync.question('Enter your name: ');
let city = readlineSync.question('Enter your city: ');
let numberOfFriends = readlineSync.questionInt('Enter the number of friends: ');


let facebookProfile = "Name: " + name + ", City: " + city + ", No Of friends: " + numberOfFriends + ("");


console.log("Facebook Profile:", facebookProfile);