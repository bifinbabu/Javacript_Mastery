// Write a JavaScript program to reverse a given string.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (a) => {
  newString = a.split("").reverse().join("");
  console.log(newString);
  rl.close();
});
