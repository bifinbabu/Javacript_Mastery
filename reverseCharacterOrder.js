// 134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

function reverseChar(s) {
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    let d = 122 - s.charCodeAt(i);
    let newChar = String.fromCharCode(97 + d);
    newArr.push(newChar);
  }
  return newArr.join("");
}

console.log(reverseChar("abcxyz")); // Output: "zyxcba"
console.log(reverseChar("python")); // Output: "kbgslm"

// Another method

// Function to change characters in a string based on specified logic
function change_char(str1) {
  var result = []; // Initialize an empty array to store the resulting characters
  for (var i = 0; i < str1.length; i++) {
    var char_order = str1.charCodeAt(i) - "a".charCodeAt(0); // Get the character code and calculate its order relative to 'a'
    var change_char = 25 - char_order + "a".charCodeAt(0); // Calculate the new character based on the order difference
    result.push(String.fromCharCode(change_char)); // Convert the character code back to character and add it to the result array
  }
  return result.join(""); // Join the characters in the result array into a string and return
}

// Test cases
console.log(change_char("abcxyz")); // Output: "zyxcba"
console.log(change_char("python")); // Output: "kbgslm"
