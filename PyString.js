// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  if (str.substring(0, 2) === "Py") {
    console.log(str);
    // return str
  } else {
    let newString = "Py" + str;
    console.log(newString);
    // return newString
  }
  rl.close();
});
