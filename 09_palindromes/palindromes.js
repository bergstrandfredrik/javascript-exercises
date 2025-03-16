const palindromes = function (str) {
  let copy = str
    .toLowerCase()
    .replaceAll("!", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .split(" ")
    .join("");
  let reverseWord = copy.split("").reverse().join("");
  if (reverseWord === copy) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
