// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

console.log(new Date());

let date = new Date();
let today = date.getDay();
console.log(today);

let days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log("Today is", days[today]);
console.log("Local time is", typeof date.toLocaleTimeString());

let currentTime = date.toLocaleTimeString();
console.log(
  "Current time is",
  currentTime.split(":")[0],
  currentTime.split(" ")[1].toUpperCase(),
  ":",
  currentTime.split(":")[1],
  ":",
  currentTime.split(":")[2].split(" ")[0]
);
