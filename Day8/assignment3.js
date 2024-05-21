//Find the tallest student among 3 students

const readline = require('readline-sync');

const number1 = readline.question("Enter the tallest student one: ");
const number2 = readline.question("Enter the tallest student two: ");
const number3 = readline.question("Enter the tallest student three: ");


if (number1 >= number2) {
    if (number1 >= number3)
        console.log("Student with height: " + number1 + " is the tallest.");
    else
        console.log("Student with height: " + number3 + " is the tallest.");
} else {
    if (number2 >= number3)
        console.log("Student with height: " + number2 + " is the tallest.");
    else
        console.log("Student with height: " + number3 + " is the tallest.");
}

