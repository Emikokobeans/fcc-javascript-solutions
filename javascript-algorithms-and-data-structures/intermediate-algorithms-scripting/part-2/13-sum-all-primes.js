function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    sum += i;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        sum -= i;
        break;
      }
    }
  }
  return sum;
}

module.exports = sumPrimes;
