// 136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.

// Wrong method
// function replaceDigit(s) {
//   console.log(typeof parseInt("a"));
//   let newArr = [];
//   for (let i = 0; i < s.length; i++) {
//     console.log(parseInt(s[i]));
//     if (parseInt(s[i]) === NaN) {
//       newArr.push(s[i]);
//     } else {
//       newArr.push("$");
//     }
//   }
//   return newArr;
// }

// console.log(replaceDigit("abc1dabc")); // Output: "abc$dabc"
// console.log(replaceDigit("p3ython")); // Output: "p$ython"
// console.log(replaceDigit("ab1cabc")); // Output: "ab$cabc"

function replace_first_digit(input_str) {
  // Using regular expression to replace the first occurrence of a digit with '$'
  return input_str.replace(/[0-9]/, "$");
}

console.log(replace_first_digit("abc1dabc")); // Output: "abc$dabc"
console.log(replace_first_digit("p3ython")); // Output: "p$ython"
console.log(replace_first_digit("ab1cabc")); // Output: "ab$cabc"
