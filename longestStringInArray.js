// 125. Write a JavaScript program to find the longest string in a given array.

function longestString(a) {
  let longest = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i].length > longest.length) {
      longest = a[i];
    }
  }
  return longest;
}

console.log(longestString(["ab", "a", "abcd"])); // Output: "abcd" (Longest string in the array)
console.log(longestString(["ab", "ab", "ab"])); // Output: "ab" (All strings are of equal length)
