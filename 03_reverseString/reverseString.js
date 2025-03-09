const reverseString = function (word) {
  const arr = word.split("");
  let reversedString = "";
  for (let i = 0; i < arr.length; i++) {
    reversedString += arr[arr.length - i - 1];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
