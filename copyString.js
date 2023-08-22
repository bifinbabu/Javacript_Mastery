// JavaScript program to create a new string of specified copies of a given string.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  rl.question("Enter number of times to be repeated: ", (n) => {
    if (n <= 0) {
      console.log(str);
    } else {
      console.log(str.repeat(n));
    }
    rl.close();
  });
});
