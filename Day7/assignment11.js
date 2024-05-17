//Given three cricket team scores, find the winning team 

const readlineSync = require("readline-sync");


const scoreTeam1 = readlineSync.question("Enter the score of Team 1: ");
const scoreTeam2 = readlineSync.question("Enter the score of Team 2: ");
const scoreTeam3 = readlineSync.question("Enter the score of Team 3: ");

let winningTeam;

if (scoreTeam1 > scoreTeam2 && scoreTeam1 > scoreTeam3) {
    winningTeam = "Team 1";
}
if (scoreTeam2 > scoreTeam1 && scoreTeam2 > scoreTeam3) {
    winningTeam = "Team 2";
}
if (scoreTeam3 > scoreTeam1 && scoreTeam3 > scoreTeam2) {
    winningTeam = "Team 3";
}


console.log("The winning team is: " + winningTeam);




