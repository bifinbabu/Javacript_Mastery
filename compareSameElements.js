// 141. Write a JavaScript program to find the number of elements in both arrays.

function countSameElements(a, b) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(countSameElements([1, 2, 3, 4], [1, 2, 3, 4])); // Output: 4
console.log(countSameElements([1, 2, 3, 4], [1, 2, 3, 5])); // Output: 3
console.log(countSameElements([1, 2, 3, 4], [11, 22, 33, 44])); // Output: 0
