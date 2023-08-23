// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

const largestValueArray = (arr) => {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  let newArr = arr.map((e) => (e = largest));
  console.log(newArr);
};

largestValueArray([1, 2, 3]);
largestValueArray([4, 2, 3]);

function all_max(nums) {
  const max_val = nums[0] > nums[2] ? nums[0] : nums[2];

  nums[0] = max_val;
  nums[1] = max_val;
  nums[2] = max_val;

  return nums;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));
