// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

const rotateLeft = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    firstItem = arr.shift();
    // console.log("first", firstItem);
    // console.log(arr);
    arr.push(firstItem);
    console.log(arr);
  }
};

let ARR = [1, 2, 3, 4];

rotateLeft(ARR);

// 1 2 3 4
