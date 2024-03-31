// 133. Write a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.

function properImproper(a) {
  return a[0] < a[1] ? "Proper" : "Improper";
}

console.log(properImproper([12, 300])); // Output: Proper fraction.
console.log(properImproper([2, 4])); // Output: Proper fraction.
console.log(properImproper([103, 3])); // Output: Improper fraction.
console.log(properImproper([104, 2])); // Output: Improper fraction.
console.log(properImproper([5, 40])); // Output: Proper fraction.

// Another method

// Function to determine if the fraction is proper or improper
function proper_improper_test(num) {
  // Check if the absolute value of the division is less than 1
  return Math.abs(num[0] / num[1]) < 1
    ? "Proper fraction." // Return 'Proper fraction.' if the condition is true
    : "Improper fraction."; // Otherwise, return 'Improper fraction.'
}

// Test cases
console.log(proper_improper_test([12, 300])); // Output: Proper fraction.
console.log(proper_improper_test([2, 4])); // Output: Proper fraction.
console.log(proper_improper_test([103, 3])); // Output: Improper fraction.
console.log(proper_improper_test([104, 2])); // Output: Improper fraction.
console.log(proper_improper_test([5, 40])); // Output: Proper fraction.
