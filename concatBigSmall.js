// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first string: ", (str1) => {
  rl.question("Enter the second string: ", (str2) => {
    let fLength = str1.length;
    let SLength = str2.length;
    if (fLength !== SLength) {
      let diff;
      if (fLength > SLength) {
        diff = fLength - SLength;
        console.log(diff);
        console.log(str1.slice(0, str1.length - diff) + str2);
      } else {
        diff = SLength - fLength;
        console.log(diff);
        console.log(str1 + str2.slice(0, str2.length - diff));
      }
    } else {
      console.log(str1 + str2);
    }
    rl.close();
  });
});
