const repeatString = function (str, nr) {
  if (nr < 0) return "ERROR";
  let repeatedString = "";
  for (let i = 0; i < nr; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
