// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

function isNotOneOrThree(ar) {
  if (ar.indexOf(1) === -1 && ar.indexOf(3) === -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotOneOrThree([1, 5]));
console.log(isNotOneOrThree([2, 3]));
console.log(isNotOneOrThree([7, 5]));
