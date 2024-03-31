// 139. Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.

function rightmost(a) {
  let right = null;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 10 === 0) {
      right = a[i];
    }
  }
  return right ?? "No round";
}

console.log(rightmost([1, 22, 30, 54, 56]));
console.log(rightmost([1, 22, 32, 54, 56]));
console.log(rightmost([1, 22, 32, 54, 50]));
