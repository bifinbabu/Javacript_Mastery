// 107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.

function sortedPairCount(a) {
  let sortedPairs = [];
  let ctr = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] % a[j] === 0 || a[j] % a[i] === 0) {
        sortedPairs.push([a[i], a[j]]);
        ctr++;
      }
    }
  }
  console.log("pairs", sortedPairs);
  return sortedPairs, ctr;
}

console.log(sortedPairCount([1, 3, 2]));
console.log(sortedPairCount([2, 4, 16]));
