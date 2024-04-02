// 146. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.

function sumOfCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i * i;
  }
  return sum;
}

console.log(sumOfCubes(3)); // Output: 36
console.log(sumOfCubes(4)); // Output: 100

// Best solution with Math.pow() method
/**
 * Function to calculate the sum of cubes up to a given number 'n'
 * @param {number} n - The number up to which the sum of cubes needs to be calculated
 * @returns {number} - The sum of cubes up to the given number
 */
function sum_Of_Cubes(n) {
  var sumn = 0; // Variable to hold the sum of cubes

  // Loop to calculate the sum of cubes up to the number 'n'
  for (var i = 1; i <= n; i++) {
    sumn += Math.pow(i, 3); // Add the cube of 'i' to the sum
  }
  return sumn; // Return the total sum of cubes
}

// Display the sum of cubes for different values of 'n'
console.log(sum_Of_Cubes(3)); // Output: 36
console.log(sum_Of_Cubes(4)); // Output: 100
