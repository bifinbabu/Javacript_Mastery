// 147. Write a JavaScript program to compute the sum of all the digits that occur in a given string.

function sumOfDigits(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) {
      sum += parseInt(s[i]);
    }
  }
  return sum;
}

console.log(sumOfDigits("abcd12efg9")); // Output: 12
console.log(sumOfDigits("w3resource")); // Output: 3
