// Write a JavaScript program to calculate the days left before Christmas.

const currentDate = new Date();

// const today = date.get();
const thisYear = currentDate.getFullYear();

let christmasDay;
if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
  christmasDay = new Date(thisYear + 1, 11, 25);
} else {
  christmasDay = new Date(thisYear, 11, 25);
}

var oneDay = 1000 * 60 * 60 * 24;

const daysBeforeChristmas = Math.ceil(
  (christmasDay.getTime() - currentDate.getTime()) / oneDay
);

console.log(daysBeforeChristmas);
