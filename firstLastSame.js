// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

const sameCheck = (a) => {
  return a[0] === a[a.length - 1];
};

let a = [1, 2, 3];
let b = [1, 2, 1];

console.log(sameCheck(a));
console.log(sameCheck(b));
