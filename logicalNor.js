// 124. Write a JavaScript program to create the NOR value of two given booleans.
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

function logicalNor(a, b) {
  return !a && !b;
}

console.log(logicalNor(true, false)); // Output: false (logical NOR of true and false is false)
console.log(logicalNor(false, false)); // Output: true (logical NOR of false and false is true)
console.log(logicalNor(true, true)); // Output: false (logical NOR of true and true is false)
