// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.

function nearestPrime(n) {
  for (let i = n + 1; ; i++) {
    var isPrime = true;
    // Check divisibility from 2 up to the square root of the number
    for (let d = 2; d <= Math.sqrt(i); d++) {
      if (i % d === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      return i;
    }
  }
}

console.log(nearestPrime(3)); // Output: 5
console.log(nearestPrime(17)); // Output: 19

// Another method
// Function to find the next prime number after a given number
function next_Prime_num(num) {
  // Start checking from the next number after 'num'
  for (var i = num + 1; ; i++) {
    var isPrime = true;
    // Check divisibility from 2 up to the square root of the number
    for (var d = 2; d * d <= i; d++) {
      // If 'i' is divisible by 'd', it's not a prime number
      if (i % d === 0) {
        isPrime = false;
        break;
      }
    }
    // If 'isPrime' is still true, return 'i' (it's a prime number)
    if (isPrime) {
      return i;
    }
  }
}

// Test cases
console.log(next_Prime_num(3)); // Output: 5
console.log(next_Prime_num(17)); // Output: 19
