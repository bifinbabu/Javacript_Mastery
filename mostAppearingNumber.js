// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.

function findMostFrequentNumber(arr) {
  let frequency = {}; // Object to store frequency of numbers
  let maxFrequency = 0; // Variable to keep track of maximum frequency
  let mostFrequentNumber = null; // Variable to store the most frequent number

  // Loop through the array and count the frequency of each number
  arr.forEach(function (num) {
    // console.log(frequency[num]);
    frequency[num] = (frequency[num] || 0) + 1; // Increment the frequency of the number
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num]; // Update the maximum frequency
      mostFrequentNumber = num; // Update the most frequent number
    }
  });
  //   console.log(frequency);

  return mostFrequentNumber;
}

// Example usage
let numbers = [1, 2, 3, 4, 2, 2, 3, 1, 5, 2];
let result = findMostFrequentNumber(numbers);
console.log("The most frequent number is: " + result);

console.log(findMostFrequentNumber([1, 2, 3, 2, 2, 8, 1, 9]));
