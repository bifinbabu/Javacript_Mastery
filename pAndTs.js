// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  let p = str.replace(/[^p]/g, "").length;
  let t = str.replace(/[^t]/g, "").length;
  //   console.log(p, t);
  if (p === t) console.log("Contains equal number of p and t");
  else console.log("p and t count not equal");
  rl.close();
});
