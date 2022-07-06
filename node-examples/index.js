const rect = require("./rectangle");

function solveRect(l, b) {
  console.log(`Solving for rectangle with l = ${l} and b = ${b}`);

  rect(l, b, (error, rectangle) => {
    if (error) {
      console.log(`Error: ${error.message}`);
    } else {
      console.log(
        `The area of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.area()}`
      );
      console.log(
        `The perimeter of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.perimeter()}`
      );
    }
  });
  console.log(`This statement after the call to rect()`);
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(6, 9);
solveRect(0, 6);
