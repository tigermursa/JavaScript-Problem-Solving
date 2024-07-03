/*
1. If three sides are equal then "equilateral"
2. If two sides are equal then "isosceles"
3. If no side is equal then "scalene"
*/

const triangleMeter = (a, b, c) => {
  const first = "equilateral";
  const second = "isosceles";
  const third = "scalene";

  if (a === b && b === c) {
    return first; // equilateral: all sides are equal
  } else if (a === b || b === c || c === a) {
    return second; // isosceles: two sides are equal
  } else {
    return third; // scalene: no sides are equal
  }
};

console.log(triangleMeter(1, 2, 3)); // scalene
console.log(triangleMeter(2, 2, 3)); // isosceles
console.log(triangleMeter(3, 3, 3)); // equilateral

/*
Logical Operators: Use && for AND and || for OR; avoid bitwise operators (& and |) for logical conditions.
Conditional Statements: Use if, else if, and else for mutually exclusive conditions.
Return Values: Return specific strings based on conditions.
  */
