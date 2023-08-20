// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (str) => {
  rl.question(
    "Enter the position where the character has to be removed: ",
    (position) => {
      if (position > str.length) {
        console.log("Enter a valid position");
      } else {
        console.log(
          "New string is",
          str.substring(0, position - 1) +
            str.substring(position, str.length + 1)
        );
        // console.log(str);
      }
      rl.close();
    }
  );
});

// a b c d e
