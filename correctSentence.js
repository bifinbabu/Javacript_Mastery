// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)

const correctSentence = (s) => {
  if (s.charCodeAt(0) > 64 && s.charCodeAt(0) < 91 && s[s.length - 1] === ".") {
    return true;
  } else {
    return false;
  }
};

console.log(
  correctSentence(
    "This tool will help you write better English and efficiently corrects texts."
  )
); // Output: true (It's a correct sentence)
console.log(
  correctSentence(
    "This tool will help you write better English and efficiently corrects texts"
  )
); // Output: false (Missing period at the end)
console.log(
  correctSentence(
    "this tool will help you write better English and efficiently corrects texts."
  )
); // Output: false (First letter should be capitalized)
