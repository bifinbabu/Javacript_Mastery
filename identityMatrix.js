// 117. Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

// My failed method
const checkIdentityMatrix = (m) => {
  let flag1 = false;
  let flag2 = false;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      if (m[i][j] === 0 || m[i][j] === 1) {
        if (i === j) {
          if (m[i][j] === 1) {
            flag1 = true;
          }
        }
        if (i !== j) {
          if (m[i][j] === 0) {
            flag2 = true;
          }
        }
      } else {
        return false;
      }
    }
  }
  console.log(flag1, flag2);
};

checkIdentityMatrix([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
checkIdentityMatrix([
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 1],
]);

// Solution

// Function to check if the given matrix is an identity matrix
function is_identity_Matrix(matrix_data) {
  // Checks whether given matrix is a square matrix or not
  for (var i = 0; i < matrix_data.length; i++) {
    rows = matrix_data.length;
    cols = matrix_data[i].length;
    if (rows != cols) {
      console.log("Matrix should be a square matrix");
      return false;
    }
  }
  // Loop to verify if the matrix is an identity matrix
  for (var i = 0; i < matrix_data.length; i++) {
    for (var j = 0; j < matrix_data.length; j++) {
      if (
        (matrix_data[i][j] !== 1 && i === j) ||
        (matrix_data[i][j] !== 0 && i !== j)
      ) {
        return false;
      }
    }
  }
  return true; // Returns true if the matrix is an identity matrix
}

// Testing the function with sample inputs
console.log(
  is_identity_Matrix([
    [1, 0, 0, 2],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // Output: false (not a square matrix)
console.log(
  is_identity_Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // Output: true (identity matrix)
console.log(
  is_identity_Matrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // Output: false (not an identity matrix)
