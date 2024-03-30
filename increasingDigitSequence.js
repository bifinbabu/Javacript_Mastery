// 119. Write a JavaScript program to check if a given integer has an increasing digit sequence.

function increasingDigitSequence(d) {
  let ds = d.toString();
  for (let i = 0; i < ds.length - 1; i++) {
    if (parseInt(ds[i]) >= parseInt(ds[i + 1])) {
      return false;
    }
  }
  return true;
}

console.log(increasingDigitSequence(123));
console.log(increasingDigitSequence(1223));
