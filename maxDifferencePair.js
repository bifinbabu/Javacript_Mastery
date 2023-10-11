// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

// function maximumDifferencePair(a) {
//   let max = -1;
//   let temp;
//   for (let i = 0; i < a.length - 1; i++) {
//     for (let j = i + 1; j < a.length - 1; j++) {
//       temp = Math.abs(a[i] - a[j]);
//       max = Math.max(temp, max);
//     }
//   }
//   return max;
// }

// console.log(maximumDifferencePair([1, 2, 3, 8, 9]));
// console.log(maximumDifferencePair([1, 2, 3, 18, 9]));
// console.log(maximumDifferencePair([13, 2, 3, 8, 9]));

function array_max_diff(arr) {
  var max_result = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k != i && k < arr.length; k++) {
      var diff = Math.abs(arr[i] - arr[k]);
      max_result = Math.max(max_result, diff);
    }
  }
  return max_result;
}
console.log(array_max_diff([1, 2, 3, 8, 9]));
console.log(array_max_diff([1, 2, 3, 18, 9]));
console.log(array_max_diff([13, 2, 3, 8, 9]));
