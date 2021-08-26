const getIndexToIns = require('./14-where-do-i-belong');

describe('getIndexToIns()', () => {
  test('should return a number', () => {
    expect(typeof getIndexToIns([10, 20, 30, 40, 50], 35)).toBe('number');
  });
  test('should return the index of 0 is the array is empty', () => {
    expect(getIndexToIns([], 1)).toBe(0);
  });
  test('should return the index of where the number should belong in a sorted array', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
  });
  test('should return the index of where the number should belong once an unsorted array is sorted', () => {
    expect(getIndexToIns([3, 10, 5], 3)).toBe(0);
    expect(getIndexToIns([5, 3, 20, 3], 5)).toBe(2);
  });
  test('should return the lowest index at which the number should be inserted', () => {
    expect(getIndexToIns([5, 5, 5, 5], 5)).toBe(0);
  });
});
