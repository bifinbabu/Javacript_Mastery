// Write a JavaScript program to extract the first half of a string.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// substring() and slice() are almost the same
rl.question("Enter the string: ", (str) => {
  console.log(str.slice(0, str.length / 2));
  rl.close();
});
