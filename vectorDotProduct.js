// 108. Write a JavaScript program to create the dot products of two given 3D vectors.

function dotProductOfVectors(a, b) {
  let i = a[0] * b[0];
  let j = a[1] * b[1];
  let k = a[2] * b[2];
  return i + j + k;
}

console.log(dotProductOfVectors([1, 2, 3], [1, 2, 3])); // Output: 14 (1*1 + 2*2 + 3*3 = 14)
console.log(dotProductOfVectors([2, 4, 6], [2, 4, 6])); // Output: 56 (2*2 + 4*4 + 6*6 = 56)
console.log(dotProductOfVectors([1, 1, 1], [0, 1, -1])); // Output: 0 (1*0 + 1*1 + 1*(-1) = 0)

// Better method

// Function to calculate the dot product of two vectors in 3D space
function dot_product(vector1, vector2) {
  var result = 0; // Initialize the variable to store the dot product result

  // Loop through each component of the vectors and calculate the dot product
  for (var i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i]; // Sum the products of corresponding components
  }

  return result; // Return the calculated dot product
}

// Examples of calculating dot products of given vectors
console.log(dot_product([1, 2, 3], [1, 2, 3])); // Output: 14 (1*1 + 2*2 + 3*3 = 14)
console.log(dot_product([2, 4, 6], [2, 4, 6])); // Output: 56 (2*2 + 4*4 + 6*6 = 56)
console.log(dot_product([1, 1, 1], [0, 1, -1])); // Output: 0 (1*0 + 1*1 + 1*(-1) = 0)
