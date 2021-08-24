function largestOfFour(arr) {
  const largestNums = arr.map((item) => Math.max(...item));
  return largestNums;
}

module.exports = largestOfFour;
