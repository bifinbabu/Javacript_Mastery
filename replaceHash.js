// 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be : ["210", "240", "270"]

function replaceHash(s) {
  let outputArr = [];
  for (let j = 0; j < 10; j++) {
    const newStr = s.split("#").join(j.toString());
    if (parseInt(newStr) % 3 === 0) {
      outputArr.push(newStr);
    }
  }
  console.log(outputArr);
}

replaceHash("2#0");
replaceHash("4#2");
