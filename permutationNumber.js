// 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.

function permutationNumber(a, n) {
  for (let i = 0; i < n; i++) {
    if (a.indexOf(i + 1) === -1) {
      return false;
    }
  }
  return true;
}

console.log(permutationNumber([1, 2, 3, 4, 5], 5)); // Output: true (permutation of [1, 2, 3, 4, 5])
console.log(permutationNumber([1, 2, 3, 5], 5)); // Output: false (not a permutation of [1, 2, 3, 4, 5])
