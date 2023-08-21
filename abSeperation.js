// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// Simple Efficient Method
function ab_Check(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));

// // This method needs to be fixed

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the string: ", (a) => {
//   let stringArray = a.split("");
//   let first = "a";
//   let second = "b";
//   let firstPos;
//   let secondPos;
//   for (let i = 0; i < stringArray.length; i++) {
//     if (stringArray[i] === first) {
//       firstPos = i + 1;
//     }
//     if (stringArray[i] === second) {
//       secondPos = i + 1;
//     }
//   }
//   console.log(firstPos, secondPos);
//   if (firstPos && secondPos) {
//     let spacing = Math.abs(firstPos - secondPos);
//     if (spacing === 4) {
//       console.log("It is happening");
//     } else {
//       console.log("It is not happening");
//     }
//   } else {
//     console.log("It is not happening");
//   }
//   rl.close();
// });

// ["a","d", "f","d", "b"]
