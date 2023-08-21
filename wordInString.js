// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string ", (str) => {
  res = str.substring(0, 4) === "Java" ? true : false;
  console.log(res);
  rl.close();
});
