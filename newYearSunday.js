const newYearMonth = 0;
const newYearDay = 1;

let sundayCount = 0;
let newYearDate;

for (let i = 2014; i <= 2050; i++) {
  newYearDate = new Date(i, newYearMonth, newYearDay);
  if (newYearDate.getDay() === 0) {
    sundayCount++;
  }
}

// console.log("New Year's date:", newYearDate);
console.log("Total number of new year sundays", sundayCount);
