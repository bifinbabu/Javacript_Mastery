// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

function thirtyFortyTwice(a) {
  let count = { t: 0, f: 0 };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 30) {
      count.t++;
    }
    if (a[i] === 40) {
      count.f++;
    }
  }
  if (count.t >= 2 || count.f >= 2) {
    return true;
  } else {
    return false;
  }
}

console.log(thirtyFortyTwice([30, 30]));
console.log(thirtyFortyTwice([40, 40]));
console.log(thirtyFortyTwice([20, 20]));
console.log(thirtyFortyTwice([30]));

// Another method

function twice3040(arra1) {
  let a = arra1[0],
    b = arra1[1];
  return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));
