// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

const isOneOrThree = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      console.log("success");
      return;
    }
  }
};

isOneOrThree([1, 5]);
isOneOrThree([5, 5]);
isOneOrThree([5, 3]);
isOneOrThree([3, 1]);

// Best Method

function contains13(nums) {
  if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
    return true;
  } else {
    return false;
  }
}

console.log(contains13([1, 5]));
console.log(contains13([2, 3]));
console.log(contains13([7, 5]));
