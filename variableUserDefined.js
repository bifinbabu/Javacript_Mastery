// Write a JavaScript exercise to create a variable using a user-defined name.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the a variable name: ", (name) => {
  // let `${name}` = 7
  this[name] = 7;
  console.log(this[name]);
  rl.close();
});
