// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the a number: ", (a) => {
  rl.question("Guess the first number: ", (b) => {
    // console.log(typeof a);
    a = parseInt(a);
    b = parseInt(b);
    if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
      console.log(true);
    } else {
      console.log(false);
    }
    rl.close();
  });
});
