const chunkArrayInGroups = require('./16-chunky-monkey');

describe('chunkArrayInGroups()', () => {
  test('should return and array', () => {
    expect(Array.isArray(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))).toBe(
      true
    );
  });
  test('should return a single value nested in a array when given 1', () => {
    expect(chunkArrayInGroups(['a'], 1)).toEqual([['a']]);
  });
  test('should return two values split and nested when given 1', () => {
    expect(chunkArrayInGroups(['a', 'b'], 1)).toEqual([['a'], ['b']]);
  });
  test('should return each nested array length to equal the given number if it is a multiple', () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd']
    ]);
  });
  test('should return as many nested arrays as possible even if values total are not a multiple of the number', () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8]
    ]);
  });
});
