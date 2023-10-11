// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.

function buildPalindrome(og) {
  let flag = false;
  //   console.log(og.slice(0, 1));
  let sliceEnd = 1;
  let newStr;
  while (!flag) {
    newStr = og + og.slice(0, sliceEnd).split("").reverse().join("");
    // console.log(newStr.slice(0, newStr.length / 2));
    // console.log(
    //   newStr
    //     .slice(
    //       newStr.length % 2 === 0 ? newStr.length / 2 : newStr.length / 2 + 1,
    //       newStr.length
    //     )
    //     .split("")
    //     .reverse()
    //     .join("")
    // );
    if (
      newStr.slice(0, newStr.length / 2) ===
      newStr
        .slice(
          newStr.length % 2 === 0 ? newStr.length / 2 : newStr.length / 2 + 1,
          newStr.length
        )
        .split("")
        .reverse()
        .join("")
    ) {
      flag = true;
    } else {
      sliceEnd++;
    }
  }
  if (flag) {
    console.log(newStr);
  }
}

buildPalindrome("abcddc");
buildPalindrome("122");
