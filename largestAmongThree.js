// Largest among three integers

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1) => {
  rl.question("Guess the second number: ", (num2) => {
    rl.question("Guess the third number: ", (num3) => {
      let largest;
      largest =
        num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;

      console.log("largest number", largest);
      rl.close();
    });
  });
});
