// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (a) => {
  rl.question("Guess the second number: ", (b) => {
    rl.question("Guess the third number: ", (c) => {
      if (a === b && b === c) {
        console.log(30);
      } else if (a === b || b === c || a === c) {
        console.log(40);
      } else {
        console.log(20);
      }
      rl.close();
    });
  });
});
