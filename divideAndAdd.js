// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

function divideAndAdd(a) {
  let oddSum = 0;
  let evenSum = 0;
  let resultArr = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      oddSum += a[i];
    } else {
      evenSum += a[i];
    }
  }
  resultArr.push(oddSum);
  resultArr.push(evenSum);
  console.log(resultArr);
}

divideAndAdd([1, 3, 6, 2, 5, 10]);

// Other Method

function alternate_Sums(arr) {
  var result = [0, 0];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2) result[1] += arr[i];
    else result[0] += arr[i];
  }
  return result;
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]));
