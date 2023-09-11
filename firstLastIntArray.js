// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

const transformArray = (a) => {
  if (a.length < 2) {
    console.log("Enter an array whose length greater than 1");
  } else {
    let newArr = [];
    newArr.push(a[0], a[a.length - 1]);
    console.log(newArr);
  }
};

transformArray([1, 2, 3]);
transformArray([1, 2, 3, 4]);
transformArray([1, 2, 3, 4, 5]);
transformArray([1]);
