const removeFromArray = function (arr, ...numbers) {
  let newArr = [...numbers];
  for (let i = 0; i < newArr.length; i++) {
    let index = arr.indexOf(newArr[i]);
    if (index === -1) continue;

    arr.splice(index, 1);
    if (arr.indexOf(newArr[i]) !== -1) i--;
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
