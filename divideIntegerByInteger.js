// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

function divideIntegerByInteger(n, d) {
  if (d === 1) {
    return n;
  } else {
    while (n % d === 0) {
      n = n / d;
    }
    return n;
  }
}

console.log(divideIntegerByInteger(-12, 2));
console.log(divideIntegerByInteger(13, 2));
console.log(divideIntegerByInteger(13, 1));
