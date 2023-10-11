// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replaceAllNumbers(a, n) {
  for (let i = 0; i < a.length; i++) {
    a[i] = n;
  }
  return a;
}

console.log(replaceAllNumbers([1, 3, 4], 5));

// Same kind of question

function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: " + num);
console.log(array_element_replace(num, 2, 5));
