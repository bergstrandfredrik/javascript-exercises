const leapYears = function (nr) {
  let leapYear = nr % 4 === 0 ? true : false;

  if (leapYear) {
    if (nr % 100 === 0) {
      if (nr % 400 === 0) {
        return leapYear;
      }
      leapYear = false;
    }
  }

  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
