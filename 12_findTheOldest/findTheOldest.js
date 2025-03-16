const findTheOldest = function (arr) {
  let oldest = arr[0];

  arr.forEach((person) => {
    ageOfDeath =
      oldest.yearOfDeath != undefined
        ? oldest.yearOfDeath
        : new Date().getFullYear();
    if (
      person.yearOfDeath - person.yearOfBirth >
      ageOfDeath - oldest.yearOfBirth
    ) {
      oldest = person;
    }
  });
  return oldest;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
