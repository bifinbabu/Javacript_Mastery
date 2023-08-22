// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  if (str.length > 3) {
    let middle = Math.round(str.length / 2);

    console.log(str.slice(middle - 2, middle + 1));
  }
  rl.close();
});
