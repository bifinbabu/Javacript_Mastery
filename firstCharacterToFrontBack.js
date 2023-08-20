// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  console.log(str.substring(0, str.length - 1) + str.charAt(0));
  rl.close();
});

// welcome
