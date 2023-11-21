// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

function sortPrime(n) {
  let nos = [];
  for (let i = 2; i <= n; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      // IF i=2, the inner loop never runs. That's the reason why 2 is pushed to the nos array
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    // flag = true
    if (flag) {
      nos.push(i);
    }
  }
  return nos;
}

console.log(sortPrime(5)); // Output: [2, 3, 5]
console.log(sortPrime(11)); // Output: [2, 3, 5, 7, 11]
console.log(sortPrime(19)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]

// function sortPrime(n) {
//   let nos = [];
//   for (let i = 2; i <= n; i++) {
//     let flag = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       nos.push(i);
//     }
//   }
//   return nos;
// }

// console.log(sortPrime(5)); // Output: [2, 3, 5]
// console.log(sortPrime(11)); // Output: [2, 3, 5, 7, 11]
// console.log(sortPrime(19)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
