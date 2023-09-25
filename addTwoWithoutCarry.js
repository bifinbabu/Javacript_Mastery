// 82. Write a JavaScript program to add two positive integers without carrying.

function addTwoWithoutCarry(n1, n2) {
  var result = 0;
  var x = 1;
  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10;
  }
  console.log(result);
}

addTwoWithoutCarry(222, 911);
addTwoWithoutCarry(22, 19);
addTwoWithoutCarry(22, 9);

// console.log(1113 % 10);
// console.log(Math.floor(225 / 10));
