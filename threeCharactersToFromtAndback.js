// Write a JavaScript program to create a string from a given string. This is done by taking
// the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  console.log(
    str.substring(str.length - 3, str.length) +
      str +
      str.substring(str.length - 3, str.length)
  );
  rl.close();
});

// welcome
