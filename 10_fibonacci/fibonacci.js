const fibonacci = function (nr) {
  if (nr < 0) {
    return "OOPS";
  }
  let counter = 0;
  let sum = 0;
  f = 0;
  f2 = 1;
  while (counter < nr) {
    sum = f + f2;
    f = f2;
    f2 = sum;
    counter++;
  }

  return f;
};

// Do not edit below this line
module.exports = fibonacci;
