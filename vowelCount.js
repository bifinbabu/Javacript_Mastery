// Write a JavaScript program to count the number of vowels in a given string.

// Best method with regular expression
function vowel_Count(str) {
  return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the string: ", (str) => {
//   let newStr = str.split("");
//   let count = 0;
//   for (let i = 0; i < newStr.length; i++) {
//     if (
//       newStr[i] === "a" ||
//       newStr[i] === "e" ||
//       newStr[i] === "i" ||
//       newStr[i] === "o" ||
//       newStr[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
//   rl.close();
// });
