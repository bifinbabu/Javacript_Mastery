// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first string: ", (str1) => {
  if (str1.substring(0, 3) === "los" || str1.substring(0, 3) === "new") {
    console.log(true);
  } else {
    console.log(false);
  }
  rl.close();
});
