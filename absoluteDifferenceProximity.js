// 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.

function absoluteDifferenceProximity(a, n) {
  let proximity = -1;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      let x = Math.abs(a[i] - a[j]);
      if (x <= n) {
        // let difference = Math.abs(x - n);
        // if (x > proximity) {
        //   proximity = x;
        // }
        proximity = Math.max(x, proximity);
        // proximity = Math.abs(x - n);
        // console.log("proximity", proximity, x, a[i], a[j]);
      }
    }
  }
  return proximity;
}

console.log(absoluteDifferenceProximity([12, 10, 33, 34], 10));
console.log(absoluteDifferenceProximity([12, 10, 33, 34], 24));
console.log(absoluteDifferenceProximity([12, 10, 33, 44], 40));

// Other method

function different_values(ara, n) {
  var max_val = -1;
  for (var i = 0; i < ara.length; i++) {
    for (var j = i + 1; j < ara.length; j++) {
      var x = Math.abs(ara[i] - ara[j]);
      //   console.log("x", x);
      if (x <= n) {
        max_val = Math.max(max_val, x);
      }
    }
  }
  return max_val;
}
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));
