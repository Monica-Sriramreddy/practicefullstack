// Functional arguments: Passing a function to another function as an argument.

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function doOperation(a, b, op) {
  return op(a, b);
}

const ans1 = doOperation(1, 2, sum);
console.log(ans1);

const ans2 = doOperation(1, 2, multiply);
console.log(ans2);

const ans3 = doOperation(1, 2, subtract);
console.log(ans3);

const ans4 = doOperation(1, 2, divide);
console.log(ans4);
