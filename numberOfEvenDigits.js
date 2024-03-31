// 130. Write a JavaScript program to find the number of even digits in a given integer.

function numberOfEvenDigits(n) {
  let ns = n.toString();
  let evenCount = 0;
  for (let i = 0; i < ns.length; i++) {
    if (parseInt(ns[i]) % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
}

console.log(numberOfEvenDigits(123)); // Output: 1
console.log(numberOfEvenDigits(1020)); // Output: 3
console.log(numberOfEvenDigits(102)); // Output: 2

// Another method

// Function to count the number of even digits in a given number
function even_digits(num) {
  var ctr = 0;
  // Loop until 'num' becomes 0
  while (num) {
    // Increment 'ctr' if the last digit of 'num' is even
    ctr += num % 2 === 0;
    // Remove the last digit by integer division
    num = Math.floor(num / 10);
  }
  return ctr; // Return the count of even digits
}

// Test cases
console.log(even_digits(123)); // Output: 1
console.log(even_digits(1020)); // Output: 3
console.log(even_digits(102)); // Output: 2
