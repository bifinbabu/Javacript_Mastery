// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.

function numberOfTimesToReplace(n) {
  let numArr = n.toString();
  let newNum = n;
  let ctr = 0;
  if (numArr.length === 1) {
    return ctr;
  } else {
    let length = newNum.toString().length;
    while (length > 1) {
      let newSum = 0;
      if (newNum.toString().length === 1) {
        length = 1;
      } else {
        for (let i = 0; i < newNum.toString().length; i++) {
          newSum = newSum + parseInt(newNum.toString()[i]);
        }
        newNum = newSum;
        ctr++;
      }
    }
    length = newNum.toString().length;
    return ctr;
  }
}

// numberOfTimesToReplace(123);
console.log(numberOfTimesToReplace(123));
console.log(numberOfTimesToReplace(156));
console.log(numberOfTimesToReplace(884));
console.log(numberOfTimesToReplace(999));
console.log(numberOfTimesToReplace(9999));

// Resource method

// Function to calculate the sum of digits in a number
function digit_to_one(num) {
  // Inner function to compute the sum of digits in a number
  var digitSum = function (num) {
    var digit_sum = 0; // Initialize the variable to store the sum of digits
    while (num) {
      // Loop to extract digits and sum them
      digit_sum += num % 10; // Add the last digit to the sum
      num = Math.floor(num / 10); // Remove the last digit from the number
    }
    return digit_sum; // Return the sum of digits
  };

  var result = 0; // Initialize the counter for the number of steps

  while (num >= 10) {
    // Loop until the number becomes a single digit
    result += 1; // Increment the counter for each step
    num = digitSum(num); // Get the sum of digits and assign it to the number
  }

  return result; // Return the count of steps required
}

// Example usage of the function
console.log(digit_to_one(123));
console.log(digit_to_one(156));
