// 81. Write a JavaScript program to add two digits to a given positive integer of length two.

function addTwoDigits(n) {
  let s = Math.floor(n / 10) + (n % 10);
  console.log(s);
}

addTwoDigits(25);
addTwoDigits(24);
addTwoDigits(75);

// console.log(25 % 10);
// console.log(Math.round(25 / 10));
// console.log(Math.floor(25 / 10));
