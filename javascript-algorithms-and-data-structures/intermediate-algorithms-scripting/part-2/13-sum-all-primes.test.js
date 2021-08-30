const sumPrimes = require('./13-sum-all-primes');

describe('sumPrimes()', () => {
  test('should return a number', () => {
    expect(typeof sumPrimes(10)).toBe('number');
  });
  test('should return 0 when passed 0', () => {
    expect(sumPrimes(0)).toBe(0);
  });
  test('should return 0 when passed 1', () => {
    expect(sumPrimes(1)).toBe(0);
  });
  test('should return 0 when passed a negative number', () => {
    expect(sumPrimes(-3)).toBe(0);
  });

  test('should return the lowest prime number when passed the lowest prime number', () => {
    expect(sumPrimes(2)).toBe(2);
  });
  test('should return the sum of all prime numbers that are less than or equal to the given number', () => {
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
  });
});
