//  Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Enter the first number: ", (num1) => {
//   rl.question("Enter the second number: ", (num2) => {
//     const sum = parseFloat(num1) + parseFloat(num2);
//     console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
//     rl.close();
//   });
// });

const leapYearCheck = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is a leap year");
  } else {
    console.log("This is not a leap year");
  }
};

rl.question("Enter the year to check for leap year: ", (year) => {
  leapYearCheck(year);
  rl.close();
});
