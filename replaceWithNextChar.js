// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.

function replaceCharacter(s) {
  var newArr = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i].charCodeAt());
    // console.log(String.fromCharCode(s[i].charCodeAt() + 1));
    if (s[i].charCodeAt() === 122) {
      let newChar = String.fromCharCode(97);
      newArr.push(newChar);
    } else {
      let newChar = String.fromCharCode(s[i].charCodeAt() + 1);
      newArr.push(newChar);
    }
  }
  console.log(newArr.join(""));
}

replaceCharacter("asgdfvjz");

// Other method

function alphabet_char_Shift(str) {
  var all_chars = str.split("");
  for (var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"));
