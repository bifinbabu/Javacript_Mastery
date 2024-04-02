// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

function swapPair(n) {
  let ns = n.toString().split("");
  if (ns.length % 2 === 0) {
    for (let i = 0; i < ns.length; i += 2) {
      let temp = ns[i];
      ns[i] = ns[i + 1];
      ns[i + 1] = temp;
    }
    return ns.join("");
  } else {
    return false;
  }
}

console.log(swapPair(15));
console.log(swapPair(1234));
console.log(swapPair(123456));
