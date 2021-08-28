const diffArray = require('./02-diff-two-arrays');

describe('diffArray()', () => {
  test('should return an array', () => {
    expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true);
  });
  test('should return an empty array when the contents of the arrays are the same', () => {
    expect(
      diffArray(
        ['andesite', 'grass', 'dirt', 'dead shrub'],
        ['andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toEqual([]);
  });
  test('should the symmetric difference of the two arrays', () => {
    expect(
      diffArray(
        ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toEqual(['pink wool']);
  });
});
