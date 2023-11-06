// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.

function rearrange(s1, s2) {
  //   console.log(s1.split("").sort(), s2.split("").sort());
  if (s1.split("").sort().join() === s2.split("").sort().join()) {
    console.log(true);
  }
}

rearrange("xyz", "yxz");
