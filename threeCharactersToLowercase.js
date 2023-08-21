// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  if (str.length > 3) {
    console.log(
      str.substring(0, 3).toLowerCase() + str.substring(4, str.length)
    );
  } else {
    console.log(str.toUpperCase());
  }
  rl.close();
});
