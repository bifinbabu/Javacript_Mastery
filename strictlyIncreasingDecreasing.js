// 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.

// My method -Simple
function sequenceCheck(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] >= a[i + 1]) {
      if (a[i] <= a[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(sequenceCheck([1, 2, 3])); // Output: true (Monotonously increasing)
console.log(sequenceCheck([1, 2, 2])); // Output: false (Not strictly increasing)
console.log(sequenceCheck([-3, -2, -1])); // Output: true (Monotonously increasing)

// Their method
function is_monotonous(num) {
  // If the sequence has only one element, it's considered monotonous
  if (num.length === 1) {
    return true;
  }

  // Calculate the direction of the sequence
  var num_direction = num[1] - num[0];

  // Check for non-monotonic behavior
  for (var i = 0; i < num.length - 1; i++) {
    // If the product of direction and the difference between elements is not positive, it's non-monotonic
    if (num_direction * (num[i + 1] - num[i]) <= 0) {
      return false;
    }
  }
  // If the loop completes, the sequence is monotonic
  return true;
}

console.log(is_monotonous([1, 2, 3])); // Output: true (Monotonously increasing)
console.log(is_monotonous([1, 2, 2])); // Output: false (Not strictly increasing)
console.log(is_monotonous([-3, -2, -1])); // Output: true (Monotonously increasing)
