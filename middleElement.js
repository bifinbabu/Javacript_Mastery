// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

const transformArrays = (a1, a2) => {
  let newArr = [];
  newArr.push(a1[1], a2[1]);
  console.log(newArr);
};

transformArrays([1, 2, 3], [4, 5, 6]);
