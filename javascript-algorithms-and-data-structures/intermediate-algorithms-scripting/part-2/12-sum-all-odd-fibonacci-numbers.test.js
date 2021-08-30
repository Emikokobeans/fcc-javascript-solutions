const sumFibs = require('./12-sum-all-odd-fibonacci-numbers');

describe('sumFibs()', () => {
  test('should return a number', () => {
    expect(typeof sumFibs(1)).toBe('number');
  });
  test('should return 0 if passed 0', () => {
    expect(sumFibs(0)).toBe(0);
  });
  test('should return the sum of all odd fibonacci numbers that are less than or equal to the given number', () => {
    expect(sumFibs(4000000)).toBe(4613732);
    expect(sumFibs(4)).toBe(5);
  });
});
