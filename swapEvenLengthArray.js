// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.

// function swap(a) {
//   if (a.length % 2 === 0) {
//     let firstHalf = a.slice(0, a.length / 2);
//     let secondHalf = a.slice(a.length / 2, a.length);
//     return secondHalf.join(firstHalf);
//   } else {
//     return false;
//   }
// }

// console.log(swap([1, 2, 3, 4, 5, 6])); // Output: [4, 5, 6, 1, 2, 3]
// console.log(swap([1, 2, 3, 4, 5, 6, 7])); // Output: false

function swap(a) {
  if (a.length % 2 === 0) {
    for (let i = 0; i < a.length / 2; i++) {
      let temp = a[i];
      a[i] = a[a.length / 2 + i];
      a[a.length / 2 + i] = temp;
    }
    return a;
  } else {
    return false;
  }
}

console.log(swap([1, 2, 3, 4, 5, 6])); // Output: [4, 5, 6, 1, 2, 3]
console.log(swap([1, 2, 3, 4, 5, 6, 7])); // Output: false
