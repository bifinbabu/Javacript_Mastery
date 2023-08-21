// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (a) => {
  rl.question("Guess the second number: ", (b) => {
    rl.question("Guess the third number: ", (c) => {
      if (a < b && b < c) {
        console.log("Strict mode");
      } else if (a < c) {
        console.log("Soft mode");
      } else {
        console.log("Negative mode");
      }
      rl.close();
    });
  });
});
