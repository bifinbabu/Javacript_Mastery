// Write a JavaScript program to find the closest value to 100 from two numerical values.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1) => {
  rl.question("Guess the second number: ", (num2) => {
    let firstDifference = Math.abs(100 - num1);
    let secondDifference = Math.abs(100 - num2);
    if (firstDifference < secondDifference) {
      console.log("First number is closest to 100");
    } else {
      console.log("Second number is closest to 100");
    }
    rl.close();
  });
});
