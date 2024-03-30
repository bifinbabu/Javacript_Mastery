// 120. Write a JavaScript program to check if a point lies strictly inside the circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

function checkPoint(a, b, x, y, r) {
  const distance = (a - x) * (a - x) + (b - y) * (b - y);
  r *= r;
  if (distance > r) {
    return false;
  }
  //   else {
  return true;
  //   }
}

console.log(checkPoint(0, 0, 2, 4, 6)); // Output: true (Point (0,0) is inside the circle with center (2,4) and radius 6)
console.log(checkPoint(0, 0, 6, 8, 6)); // Output: false (Point (0,0) is outside the circle with center (6,8) and radius 6)
