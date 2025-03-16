const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, current) => sum * current);
};

const power = function (a, b) {
  let powerSum = a;
  for (let i = 1; i < b; i++) {
    powerSum = powerSum * a;
  }
  return powerSum;
};

const factorial = function (start) {
  let nr = start;
  if (start === 0) return 1;
  for (let i = start - 1; i > 1; i--) {
    nr = nr * i;
  }
  return nr;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
