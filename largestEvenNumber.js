// 126. Write a JavaScript program to get the largest even number from an array of integers.

// To sort an array in ascending order:

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

// Arrow function syntax
// let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

function largestEvenNumber(a) {
  let largest = null;

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      if (!largest) {
        largest = a[i];
      } else {
        if (a[i] > largest) {
          largest = a[i];
        }
      }
    }
  }
  return largest;
}

console.log(largestEvenNumber([20, 40, 200])); // Output: 200 (The maximum even number in the array)
console.log(largestEvenNumber([20, 40, 200, 301])); // Output: 200 (The maximum even number in the array)

// Best method
function largestEvenNumber2(a) {
  a.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      return a[i];
    }
  }
}

console.log(largestEvenNumber2([20, 40, 200])); // Output: 200 (The maximum even number in the array)
console.log(largestEvenNumber2([20, 40, 200, 301])); // Output: 200 (The maximum even number in the array)
