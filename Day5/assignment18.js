//Given two cricket team scores, find the winning team  ,( identify the ambiguities );

const readlineSync = require("readline-sync");


const scoreTeam1 = readlineSync.question("Enter the score of Team 1: ");
const scoreTeam2 = readlineSync.question("Enter the score of Team 2: ");


const result = findWinningTeam(scoreTeam1, scoreTeam2);
console.log(result);

function findWinningTeam(scoreTeam1, scoreTeam2) {
    if (scoreTeam1 > scoreTeam2) 
        
    {
        return "Team 1 wins!";
    } 
    else 
    {
        return "Team 2 wins!";
    } 
}

console.log (" end of if else ")


