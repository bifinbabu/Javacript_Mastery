// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

function first_last_1(nums) {
  var end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}

console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));

console.log("----------------------------");

const numberAppearance = (arr) => {
  if (arr[0] === 1 || arr[arr.length - 1] === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
};

let a1 = [1, 2, 3];
let a2 = [3, 2, 1];
let a3 = [1, 2, 1];
let a4 = [2, 3, 4];

numberAppearance(a1);
numberAppearance(a2);
numberAppearance(a3);
numberAppearance(a4);
