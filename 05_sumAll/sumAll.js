const sumAll = function (nr1, nr2) {
  let sum = 0;
  if (nr1 < 0 || nr2 < 0 || !Number.isInteger(nr1) || !Number.isInteger(nr2)) {
    return "ERROR";
  } else if (nr1 > nr2) {
    sum = getSum(nr1, nr2);
    console.log(sum);
  } else if (nr1 < nr2) {
    sum = getSum(nr2, nr1);
    console.log(sum);
  } else {
    return "ERROR";
  }
  return sum;
};

function getSum(biggest, smallest) {
  let sum = 0;
  for (let i = smallest; i <= biggest; i++) {
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
