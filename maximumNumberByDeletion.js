// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.

function maximumNumberByDeletion(n) {
  const numArr = n.toString().split("");
  let max = numArr.slice(0, numArr.length - 1).join("");
  for (let i = 0; i < numArr.length; i++) {
    let temp = numArr.join("").split(numArr[i]).join("");
    // console.log(numArr.join("").split(numArr[i]).join(""));
    if (temp > max) {
      max = temp;
    }
  }
  return parseInt(max);
}

console.log(maximumNumberByDeletion(154));

// Other method

function digit_delete(num) {
  var result = 0,
    num_digits = [];
  while (num) {
    num_digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (var index_num = 0; index_num < num_digits.length; index_num++) {
    var n = 0;
    for (var i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        n = n * 10 + num_digits[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));
