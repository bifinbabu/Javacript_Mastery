// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  rl.question("Guess the number: ", (n) => {
    console.log(str.substring(0, n) + str.substring(str.length - n));
    rl.close();
  });
});

// abcde
