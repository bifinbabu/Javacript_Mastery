// 145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

function maxInteger(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (sum + i > n) {
      return i - 1;
    }
    sum += i;
  }
}

console.log(maxInteger(11)); // Output: 4
console.log(maxInteger(15)); // Output: 5

// Another method
/**
 * Function to find the sum of natural numbers up to a given value
 * @param {number} val - The value up to which the sum of natural numbers needs to be calculated
 * @returns {number} - The number of terms in the sum sequence
 */
function sumn(val) {
  var sn = 0; // Initialize the sum of natural numbers
  var i = 0; // Initialize the index to 0

  // Loop to calculate the sum of natural numbers up to a certain limit
  while (sn <= val) {
    sn += i++; // Incrementally add the value of 'i' to the sum and increment 'i'
  }

  return i - 2; // Return the number of terms in the sum sequence (subtracting 2 to account for the extra iteration)
}

// Display the number of terms for different values
console.log(sumn(11)); // Output: 4
console.log(sumn(15)); // Output: 5
