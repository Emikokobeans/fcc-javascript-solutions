function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr[0] === sortedArr[1]) {
    return sortedArr[0] + sortedArr[1];
  }
  let sum = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll;
