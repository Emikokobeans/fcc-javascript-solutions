const destroyer = require('./03-seek-and-destroy');

describe('destroyer()', () => {
  test('should return an array', () => {
    expect(Array.isArray(destroyer([1, 2, 3, 1, 2, 3], 2, 3))).toBe(true);
  });
  test('should return an empty array when the single value in the array is the same as the second passed argument', () => {
    expect(destroyer([2], 2)).toEqual([]);
  });
  test('should return an empty array when all the items in the array are listed as arguments', () => {
    expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
  });
  test('should return the array after all elements as arguments are removed', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual([
      'hamburger'
    ]);
  });
});
