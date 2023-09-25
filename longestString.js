// 83. Write a JavaScript program to find the longest string from a given array of strings.

function longestString(sArr) {
  var longest = "";
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i].length > longest.length) {
      longest = sArr[i];
    }
  }
  console.log("Longest", longest);
}

longestString(["a", "aa", "aaa", "aaaaa", "aaaa"]);

// Conceptual method

function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map((v) => (max = Math.max(max, v.length)));
  result = str_ara.filter((v) => v.length == max);
  return result;
}

console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));
