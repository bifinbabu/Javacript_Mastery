const multiplesOfThreeOrFive = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiplesOfThreeOrFive.push(i);
  }
}

const arrayOfObjects = multiplesOfThreeOrFive.map((num) => ({ a: num }));

const groups = [];
let currentGroup = [];

let multiplier = 1;
arrayOfObjects.forEach((obj) => {
  let flag = false;
  if (obj.a >= 7 * multiplier) {
    // console.log(obj.a);
    console.log(currentGroup);
    currentGroup.push(obj);
    groups.push(currentGroup);
    currentGroup = [];
    multiplier++;
    flag = true;
  }
  if (!flag) {
    currentGroup.push(obj);
  }
});

// Adding the last group in case the array doesn't end with a multiple of 7
if (currentGroup.length > 0) {
  groups.push(currentGroup);
}

console.log(groups);
