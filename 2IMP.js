const obj1 = {
  name: "test",
  subjects: [1, 2, 3, 4],
  id: 10,
};
const obj2 = {
  name: "test",
  subjects: [1, 2, 3, 4],
  id: 10,
};
const obj3 = {
  ...obj1,
};

const obj4 = obj1;

console.log(obj1 == obj2); //false
console.log(obj2 == obj3); //false
console.log(obj4 == obj1); //true
obj1.subjects.push(20);
obj1.id = 100;
console.log(obj1.subjects); // [1, 2, 3, 4, 20]
console.log(obj2.subjects); // [1, 2, 3, 4]
console.log(obj3.subjects); // [1, 2, 3, 4]
console.log(obj4.subjects); // // [1, 2, 3, 4]
console.log(obj1.id); // 100
console.log(obj2.id); // 10
console.log(obj3.id); // 10
console.log(obj4.id); // 10
