// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

function intAndDivisor(a, b, d) {
  if (a % d === 0 && b % d === 0) {
    return true;
  } else if (a % d !== 0 && b % d !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(intAndDivisor(10, 25, 5));
console.log(intAndDivisor(10, 20, 5));
console.log(intAndDivisor(10, 20, 4));

// Best practice

function checking_numbers(x, y, divisor) {
  if (
    (x % divisor === 0 && y % divisor === 0) ||
    (x % divisor !== 0 && y % divisor !== 0)
  ) {
    return true;
  }
  return false;
}

console.log(checking_numbers(10, 25, 5));
console.log(checking_numbers(10, 20, 5));
console.log(checking_numbers(10, 20, 4));
