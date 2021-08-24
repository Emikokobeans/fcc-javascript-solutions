function findLongestWordLength(str) {
  const splitStr = str.split(' ');
  const eachLengthArr = splitStr.map((item) => item.length);
  const orderedArr = eachLengthArr.sort((a, b) => b - a);

  return orderedArr[0];
}

module.exports = findLongestWordLength;
