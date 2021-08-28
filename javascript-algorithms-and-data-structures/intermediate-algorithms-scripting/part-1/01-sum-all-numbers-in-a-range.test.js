const sumAll = require('./01-sum-all-numbers-in-a-range');

describe('sumAll()', () => {
  test('should return a number', () => {
    expect(typeof sumAll([1, 4])).toBe('number');
  });
  test('should return the same of the numbers if they are the same number', () => {
    expect(sumAll([4, 4])).toBe(8);
  });

  test('should return the sum of the consecutive numbers given', () => {
    expect(sumAll([1, 2])).toBe(3);
  });
  test('should return the sum of the consecutive numbers given with the larger number first', () => {
    expect(sumAll([2, 1])).toBe(3);
  });
  test('should return the sum of all the numbers in the range between the two numbers given', () => {
    expect(sumAll([1, 4])).toBe(10);
  });
  test('should return the sum of all the numbers in the range between the two numbers given with the large number first', () => {
    expect(sumAll([10, 5])).toBe(45);
  });
});
