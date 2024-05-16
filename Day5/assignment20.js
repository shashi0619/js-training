//Given cricket team individual score, find the winning team

const readlineSync = require("readline-sync");


const scoreOfPlayer1 = readlineSync.question(" Enter the score of Player1 from team1 : ");
const scoreOfPlayer2 = readlineSync.question(" Enter the score of Player2 from team1 : ");
const scoreOfPlayer3 = readlineSync.question(" Enter the score of Player3 from team1 : ");
const scoreOfPlayer4 = readlineSync.question(" Enter the score of Player4 from team1 : ");
const scoreOfPlayer5 = readlineSync.question(" Enter the score of Player5 from team1 : ");
const scoreOfPlayer6 = readlineSync.question(" Enter the score of Player6 from team1 : ");
const scoreOfPlayer7 = readlineSync.question(" Enter the score of Player7 from team1 : ");
const scoreOfPlayer8 = readlineSync.question(" Enter the score of Player8 from team1 : ");
const scoreOfPlayer9 = readlineSync.question(" Enter the score of Player9 from team1 : ");
const scoreOfPlayer10 = readlineSync.question(" Enter the score of Player10 from team1 : ");
const scoreOfPlayer11 = readlineSync.question(" Enter the score of Player11 from team1 : ");


const totalScoreOfTeam1 = scoreOfPlayer1+scoreOfPlayer2+scoreOfPlayer3+scoreOfPlayer4+scoreOfPlayer5+scoreOfPlayer6+scoreOfPlayer7+scoreOfPlayer8+scoreOfPlayer9+scoreOfPlayer10+scoreOfPlayer11;


const scoreOfPlayer12 = readlineSync.question(" Enter the score of Player12 from team2 : ");
const scoreOfPlayer13 = readlineSync.question(" Enter the score of Player13 from team2 : ");
const scoreOfPlayer14 = readlineSync.question(" Enter the score of Player14 from team2 : ");
const scoreOfPlayer15 = readlineSync.question(" Enter the score of Player15 from team2 : ");
const scoreOfPlayer16 = readlineSync.question(" Enter the score of Player16 from team1 : ");
const scoreOfPlayer17 = readlineSync.question(" Enter the score of Player17 from team2 : ");
const scoreOfPlayer18 = readlineSync.question(" Enter the score of Player18 from team2 : ");
const scoreOfPlayer19 = readlineSync.question(" Enter the score of Player19 from team2 : ");
const scoreOfPlayer20 = readlineSync.question(" Enter the score of Player20 from team2 : ");
const scoreOfPlayer21 = readlineSync.question(" Enter the score of Player21 from team2 : ");
const scoreOfPlayer22 = readlineSync.question(" Enter the score of Player22 from team2 : ");



const totalScoreOfTeam2 = scoreOfPlayer12+scoreOfPlayer13+scoreOfPlayer14+scoreOfPlayer15+scoreOfPlayer16+scoreOfPlayer17+scoreOfPlayer18+scoreOfPlayer19+scoreOfPlayer20+scoreOfPlayer21+scoreOfPlayer22;



if(totalScoreOfTeam1 > totalScoreOfTeam2)
{
console.log(" Team1  is the winning team. " +totalScoreOfTeam1);
}
else
{
    console.log("Team2  is the winning team. " +totalScoreOfTeam2);
}
console.log(" End of if else. ");


