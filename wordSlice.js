// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears
// in the string, return the string without "Script" otherwise return the original one.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  if (str.substring(4, 10) === "Script") {
    let newString = str.split("Script").join("");
    console.log(newString);
    // return str
  } else {
    let newString = str;
    console.log(newString);
    // return newString
  }
  rl.close();
});

// script
