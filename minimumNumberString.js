// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"

function minimumCaseSwitch(s) {
  let l = 0;
  let u = 0;
  //   let o = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) > 64 && s[i].charCodeAt(0) < 91) {
      u++;
      //   o[s[i]] = s[i].charCodeAt(0);
    }
    if (s[i].charCodeAt(0) > 96 && s[i].charCodeAt(0) < 123) {
      l++;
      //   o[s[i]] = s[i].charCodeAt(0);
    }
  }
  //   console.log(l, u, o);
  if (l > u) {
    console.log(s.toLowerCase());
  } else {
    console.log(s.toUpperCase());
  }
}

minimumCaseSwitch("PHp");
minimumCaseSwitch("Write");

// Conceptual method

function change_case(new_str) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return new_str.toLowerCase();
  return new_str.toUpperCase();
}

console.log(change_case("Write"));
console.log(change_case("PHp"));
