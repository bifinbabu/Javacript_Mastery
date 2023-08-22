// Write a JavaScript program to create a new string without the first and last characters of a given string.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// substring() and slice() are almost the same
rl.question("Enter the string: ", (str) => {
  console.log(str.slice(1, str.length - 1));
  rl.close();
});

//  a s d f
//  0 1 2 3
//  1 2 3 4
