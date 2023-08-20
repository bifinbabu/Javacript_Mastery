// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

let firstSide = 5;
let secondSide = 6;
let thirdSide = 7;

let perimeter = 0.5 * (firstSide + secondSide + thirdSide);

console.log("perimeter is", perimeter);

let area = Math.sqrt(
  perimeter *
    (perimeter - firstSide) *
    (perimeter - secondSide) *
    (perimeter - thirdSide)
);

console.log("Area of the triangle is", area);
