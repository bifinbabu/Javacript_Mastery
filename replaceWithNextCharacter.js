// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (a) => {
  let newStringArray = a.split("");
  //   console.log(newStringArray);
  let latestArray = [];
  for (let i = 0; i < newStringArray.length; i++) {
    let newCharCode = newStringArray[i].charCodeAt(0);
    newCharCode = newCharCode + 1;
    // console.log(newCharCode);
    let newChar;
    if (newCharCode === 123) {
      newChar = "a";
    } else {
      newChar = String.fromCharCode(newCharCode);
    }
    latestArray.push(newChar);
  }
  //   console.log(latestArray);
  console.log(latestArray.join(""));

  rl.close();
});
