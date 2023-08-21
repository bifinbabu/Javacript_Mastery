// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1) => {
  rl.question("Guess the second number: ", (num2) => {
    rl.question("Guess the third number: ", (num3) => {
      let first = num1.toString().slice(-1);
      let second = num2.toString().slice(-1);
      let third = num3.toString().slice(-1);
      console.log(first, second, third);
      if (first === second && second === third) {
        console.log("Last digits are same");
      } else {
        console.log("Last digits are not same");
      }
      rl.close();
    });
  });
});
