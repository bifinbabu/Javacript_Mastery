// 149. Write a JavaScript program to change the capitalization of all letters in a given string.

function change_case(s) {
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
      newS += s[i].toLowerCase();
    } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
      newS += s[i].toUpperCase();
    } else {
      newS += s[i];
    }
  }
  return newS;
}

console.log(change_case("w3resource")); // Output: W3RESOURCE
console.log(change_case("Germany")); // Output: gERMANY

// regex method

/**
 * Function to change the case of characters in a string
 * @param {string} txt - The input string
 * @returns {string} - The string with changed case characters
 */
function change_case(txt) {
  var str1 = "";
  // Loop through each character in the input string
  for (var i = 0; i < txt.length; i++) {
    // Check if the character is uppercase, change to lowercase; otherwise, change to uppercase
    if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
    else str1 += txt[i].toUpperCase();
  }
  return str1; // Return the modified string
}

// Test cases
console.log(change_case("w3resource")); // Output: W3RESOURCE
console.log(change_case("Germany")); // Output: gERMANY
