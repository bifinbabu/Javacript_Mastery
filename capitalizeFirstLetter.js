// Write a JavaScript program to capitalize the first letter of each word in a given string.

// // First Method
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the string: ", (a) => {
//   console.log(a.charAt(0).toUpperCase() + a.substring(1, a.length));
//   rl.close();
// });

// Other Method
function capital_letter(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

console.log(
  capital_letter(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
);
