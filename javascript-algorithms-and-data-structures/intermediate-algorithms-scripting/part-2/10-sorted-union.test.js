const uniteUnique = require('./10-sorted-union');

describe('uniteUnique()', () => {
  test('should return an array', () => {
    expect(Array.isArray(uniteUnique([1, 2, 3], [5, 2, 1]))).toBe(true);
  });
  test('should return an empty array when given an empty array or arrays', () => {
    expect(uniteUnique([])).toEqual([]);
    expect(uniteUnique([], [])).toEqual([]);
  });
  test('should return a single value in an array when given a single array with a single value', () => {
    expect(uniteUnique([1])).toEqual([1]);
  });
  test('should return the values in a single array when there are no duplicates in the same order', () => {
    expect(uniteUnique([1, 3, 2])).toEqual([1, 3, 2]);
  });
  test('should return the unique values in an array of a pair of duplicates', () => {
    expect(uniteUnique([1, 1])).toEqual([1]);
  });
  test('should return the unique values in an array of multiple duplicates', () => {
    expect(uniteUnique([1, 3, 2, 1, 3])).toEqual([1, 3, 2]);
  });

  test('should return the values in two given arrays into a single array in the same order when there are no duplicates', () => {
    expect(uniteUnique([1, 2, 3], [5, 4, 6])).toEqual([1, 2, 3, 5, 4, 6]);
  });
  test('should return the unique values in an array in order when given arrays of numbers', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });
  test('should function with multiple given arrays', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
      1, 2, 3, 5, 4, 6, 7, 8
    ]);
  });
});
