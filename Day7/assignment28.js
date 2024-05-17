//Given two cricket team scores, find the winning team 

const readlineSync = require("readline-sync");

const scoreTeam1 = readlineSync.question("Enter the score of Team 1: ");
const scoreTeam2 = readlineSync.question("Enter the score of Team 2: ");

let winningTeam;

if (scoreTeam1 > scoreTeam2) {
    winningTeam = "Team 1";
} else {
    winningTeam = "Team 2";
}

console.log("The winning team is: " + winningTeam);

console.log("End of if");




