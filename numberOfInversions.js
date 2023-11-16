// 102. Write a JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function numberOfInversions(a) {
  let ctr = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        ctr++;
      }
    }
  }
  return ctr;
}

console.log(numberOfInversions([0, 3, 2, 5, 9]));
console.log(numberOfInversions([1, 5, 4, 3]));
console.log(numberOfInversions([10, 30, 20, -10]));
