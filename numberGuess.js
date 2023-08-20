// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the a number: ", (num1) => {
  rl.question("Guess the first number: ", (num2) => {
    // const sum = parseFloat(num1) + parseFloat(num2);
    // console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    if (num1 === num2) console.log("Good work");
    else console.log("Not matched, the number was:", num1);
    rl.close();
  });
});
