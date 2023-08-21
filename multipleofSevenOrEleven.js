// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the a number: ", (a) => {
  rl.question("Guess the first number: ", (b) => {
    a = parseInt(a);
    b = parseInt(b);
    if ((a % 7 === 0 || a % 11 === 0) && b % 7 !== 0 && b % 11 !== 0) {
      console.log(true);
    } else if ((b % 7 === 0 || b % 11 === 0) && a % 7 !== 0 && a % 11 !== 0) {
      console.log(true);
    } else {
      console.log(false);
    }
    rl.close();
  });
});

// //Other method
// function valCheck(a, b) {
//   if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
//     return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
//   } else return false;
// }
// console.log(valCheck(14, 21));
// console.log(valCheck(14, 20));
// console.log(valCheck(16, 20));
