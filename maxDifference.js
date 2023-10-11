// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

const maximumDifference = (a) => {
  let max = -1;
  for (let i = 0; i < a.length - 1; i++) {
    if (Math.abs(a[i] - a[i + 1]) > max) {
      max = Math.abs(a[i] - a[i + 1]);
    }
  }
  return max;
};

console.log(maximumDifference([1, 2, 3, 8, 9]));
console.log(maximumDifference([1, 2, 3, 18, 9]));
console.log(maximumDifference([13, 2, 3, 8, 9]));

// Better method

function max_difference(arr) {
  var max = -1;
  var temp;
  for (var i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
}

console.log(max_difference([1, 2, 3, 8, 9]));
console.log(max_difference([1, 2, 3, 18, 9]));
console.log(max_difference([13, 2, 3, 8, 9]));
