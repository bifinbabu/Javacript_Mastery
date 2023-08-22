// Repeat the last three characters of a given string for 4 times.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// substring() and slice() are almost the same
rl.question("Enter the string: ", (str) => {
  if (str.length > 3) {
    console.log(str + str.slice(-3, str.length).repeat(4));
  } else {
    console.log(str);
  }
  rl.close();
});
