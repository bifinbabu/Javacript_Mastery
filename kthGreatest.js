// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

function kThGreatest(arr, k) {
  let newArr = arr.sort().reverse();
  console.log("kth greatest", newArr[k - 1]);
}

kThGreatest([1, 2, 6, 4, 5], 3);
kThGreatest([-10, -25, -47, -36, 0], 1);
