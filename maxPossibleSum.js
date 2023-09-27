// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

// const c = [1, 2, 3, 0, 5, 6, 7, 0, 4, 5, 6, 7];

// console.log(c.join("").split("0"));

function maxPossibleSum(a, k) {
  let sum = 0;
  let maxSum = 0;
  for (let j = 0; j < a.length - k + 1; j++) {
    let starter = j;
    // console.log("starter", starter);
    sum = 0;
    for (let i = starter; i <= starter + k - 1; i++) {
      //   console.log("item", a[i]);
      sum += a[i];
      //   console.log("sum", sum);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

console.log(maxPossibleSum([1, 2, 3, 14, 5], 2));
console.log(maxPossibleSum([2, 3, 5, 1, 6], 3));
console.log(maxPossibleSum([9, 3, 5, 1, 7], 2));

// Other method

function array_max_consecutive_sum(nums, k) {
  let result = 0;
  let temp_sum = 0;
  for (var i = 0; i < k - 1; i++) {
    temp_sum += nums[i];
  }
  for (var i = k - 1; i < nums.length; i++) {
    temp_sum += nums[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= nums[i - k + 1];
  }
  return result;
}

console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2));
