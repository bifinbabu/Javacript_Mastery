// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.

// const sumOfNumbers = (n) => {
//   let sum = 0;
//   let limit = n;
//   // let i =1
//   while (n > 0) {
//     for (i = 1; i < limit; i++) {
//       let mul = 1;
//       if (i === 1) {
//         sum += n;
//       } else {
//         sum += Math.floor(n / (mul * 2));
//         mul = mul * 2;
//       }
//     }
//   }
//   console.log("Sum", sum);
// };

// sumOfNumbers(8);
// sumOfNumbers(9);
// sumOfNumbers(26);

// Function to calculate the sum of integers from 1 to num using bitwise operation
function int_sum(num) {
  var s_sum = 0; // Initialize the sum variable
  while (num > 0) {
    // Loop until num is greater than 0
    s_sum += num; // Add num to the sum
    num = Math.floor(num / 2); // Divide num by 2 using floor division
  }
  return s_sum; // Return the sum of integers from 1 to num
}

// Examples to calculate the sum of integers from 1 to the given number
console.log(int_sum(8));
console.log(int_sum(9));
console.log(int_sum(26));
