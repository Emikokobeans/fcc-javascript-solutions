function sumFibs(num) {
  if (num === 0) {
    return 0;
  }
  let fibArr = [1, 1];
  let nextFib = 0;

  while ((nextFib = fibArr[0] + fibArr[1]) <= num) {
    fibArr.unshift(nextFib);
  }
  return fibArr.filter((x) => x % 2 !== 0).reduce((a, b) => a + b);
}

module.exports = sumFibs;
