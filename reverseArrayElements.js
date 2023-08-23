// JavaScript program to reverse the elements of a given array of integers length 3.JavaScript program to reverse the elements of a given array of integers length 3.

function reverse3(array) {
  // First Method
  let updatedArr = [];
  let newArr = array.map((element, idx, arr) => {
    updatedArr.push(arr[arr.length - 1 - idx]);
  });
  return updatedArr;
  // Not working method
  return array.map((element, idx, arr) => {
    console.log(element, idx, arr);
    console.log(arr[arr.length - 1 - idx]);
    arr[arr.length - 1 - idx];
  });
  // Second working method
  //   return array.map((element, idx, arr) => arr[arr.length - 1 - idx]);
}

console.log("----------------------");

console.log(reverse3([5, 4, 3]));
// console.log(reverse3([1, 0, -1]));
// console.log(reverse3([2, 3, 1]));
