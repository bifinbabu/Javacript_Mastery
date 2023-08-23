// Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

function nop(str) {
  let start_pos = 0;
  let end_pos = str.length;

  if (str.length > 0 && str.charAt(0) == "P") {
    start_pos = 1;
  }

  if (str.length > 1 && str.charAt(str.length - 1) == "P") {
    end_pos--;
  }

  return str.substring(start_pos, end_pos);
}

console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript"));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first string: ", (str1) => {
  //   console.log(str1.slice(-1));
  //   console.log(str1.slice(0, 1));
  if (str1.slice(-1) === "p" || str1.slice(0, 1) === "p") {
    console.log(str1);
  } else {
    console.log(str1.slice(1, str1.length - 1));
  }
  rl.close();
});
