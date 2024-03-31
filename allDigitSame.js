// 140. Write a JavaScript program to check whether all the digits in a given number are the same or not.

function allDigitSame(n) {
  let na = n.toString().split("");
  for (let i = 0; i < na.length; i++) {
    if (na[i] !== na[0]) return false;
  }
  return true;
}

console.log(allDigitSame(1234)); // Output: false
console.log(allDigitSame(1111)); // Output: true
console.log(allDigitSame(22222222)); // Output: true
