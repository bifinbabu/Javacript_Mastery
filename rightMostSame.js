// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (a) => {
  rl.question("Guess the second number: ", (b) => {
    rl.question("Guess the third number: ", (c) => {
      first = a.slice(-1);
      second = b.slice(-1);
      third = c.slice(-1);
      if (
        first === second ||
        first === third ||
        second === third ||
        (first === second && second === third)
      ) {
        console.log(true);
      } else {
        console.log(false);
      }
      rl.close();
    });
  });
});
