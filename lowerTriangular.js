// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

function lowerTriangular(m) {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      if (j > i && m[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  lowerTriangular([
    [1, 0, 0],
    [2, 0, 0],
    [0, 3, 3],
  ])
); // Output: true (Lower triangular matrix)
console.log(
  lowerTriangular([
    [1, 0, 1],
    [2, 0, 0],
    [0, 3, 3],
  ])
);
