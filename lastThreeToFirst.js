// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str1) => {
  if (str1.length > 3) {
    console.log(str1.slice(-3, str1.length).concat(str1.slice(0, -3)));
  }
  rl.close();
});
