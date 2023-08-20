// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

var str = "w3resource";

console.log("String length", str.length);

let itr = str.length - 2;

let newStr = str;

for (let i = 0; i < 3; i++) {
  newStr = newStr.slice(1, newStr.length) + newStr[0];
}

console.log("String after rotation", newStr);

const rotate = (strng) => {
  let newStr = strng;
  let i = 0;

  const rotateIteration = () => {
    if (i < strng.length) {
      newStr = newStr.slice(1) + newStr[0];
      i++;
      setTimeout(rotateIteration, 1000);
      console.log(newStr);
    }
  };

  rotateIteration();
};

rotate(str);
