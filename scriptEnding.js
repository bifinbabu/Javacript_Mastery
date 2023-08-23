// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first string: ", (str1) => {
  if (str1.length >= 6) {
    console.log(str1.slice(str1.length - 6, str1.length));
    if (str1.slice(str1.length - 6, str1.length) === "script") {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  rl.close();
});
