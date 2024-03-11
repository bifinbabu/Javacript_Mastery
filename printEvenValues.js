// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

function printEvenNos(n) {
  let evenNos = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenNos.push(i);
    }
  }
  return evenNos;
}

console.log(printEvenNos(5));
