// Write a JavaScript program to concatenate two strings except for their first character.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str1) => {
  rl.question("Enter second string: ", (str2) => {
    console.log(str1.slice(1).concat(str2.slice(1)));
    rl.close();
  });
});
