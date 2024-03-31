// 128. Write a JavaScript program to find the smallest round number not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.

// Function to find the nearest round number
function nearest_round_number(num) {
  // Loop until the number is divisible by 10
  while (num % 10) {
    // Increment the number by 1 until it is divisible by 10
    num++;
  }
  // Return the nearest round number
  return num;
}

// Test cases
console.log(nearest_round_number(56)); // Output: 60
console.log(nearest_round_number(592)); // Output: 600
