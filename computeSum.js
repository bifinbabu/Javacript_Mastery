// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

function computeSum(a) {
  let diffArr = [];
  let sum = 0;
  for (let i = 0; i < a.length - 1; i++) {
    let d = Math.abs(a[i] - a[i + 1]);
    diffArr.push(d);
  }
  for (let i = 0; i < diffArr.length; i++) {
    sum = sum + diffArr[i];
  }
  return sum;
}

console.log(computeSum([1, 2, 3]));
console.log(computeSum([1, 2, 7]));

// Optimized method

function sum_adjacent_difference(arr) {
  var result = 0;
  for (var i = 1; i < arr.length; i++) {
    result += Math.abs(arr[i] - arr[i - 1]);
  }
  return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));
