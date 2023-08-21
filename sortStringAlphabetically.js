// JavaScript program to convert the letters of a given string  in alphabetical order.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (a) => {
  console.log(a.split("").sort().join(""));
  rl.close();
});
