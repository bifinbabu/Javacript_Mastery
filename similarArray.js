// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function areArraysSimilar(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Find the indices where the elements are different
  const diffIndices = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      diffIndices.push(i);
    }
  }

  // If there are no differences or if there are more than two differences, they are not similar
  if (diffIndices.length === 0 || diffIndices.length > 2) {
    return false;
  }

  // If there are exactly two differences, check if swapping them makes the arrays equal
  if (
    arr1[diffIndices[0]] === arr2[diffIndices[1]] &&
    arr1[diffIndices[1]] === arr2[diffIndices[0]]
  ) {
    return true;
  }

  return false;
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [1, 4, 3, 2];
const array3 = [1, 2, 3, 4, 5];

console.log(areArraysSimilar(array1, array2)); // true
console.log(areArraysSimilar(array1, array3)); // false

// Other method (complex)

function array_checking(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++) {
    for (var j = i; j < arra1.length; j++) {
      var result = true,
        temp = arra1[i];
      arra1[i] = arra1[j];
      arra1[j] = temp;
      for (var k = 0; k < arra1.length; k++) {
        if (arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }
      if (result) {
        return true;
      }
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }
  return false;
}

console.log(array_checking([10, 20, 30], [10, 20, 30]));
console.log(array_checking([10, 20, 30], [30, 10, 20]));
console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40]));
