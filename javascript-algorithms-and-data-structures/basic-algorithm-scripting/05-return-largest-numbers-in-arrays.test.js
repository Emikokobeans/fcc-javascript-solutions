const { expect } = require('@jest/globals');
const largestOfFour = require('./05-return-largest-numbers-in-arrays');

describe('largestOfFour()', () => {
  test('should return an array', () => {
    expect(Array.isArray(largestOfFour([[], [], [], []]))).toBe(true);
  });
  test('should return an array of the largest array of the four provided', () => {
    expect(
      largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
      ])
    ).toEqual([5, 27, 39, 1001]);
    expect(
      largestOfFour([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1]
      ])
    ).toEqual([9, 35, 97, 1000000]);
  });
  test('the original array should not be mutated', () => {
    const array = [
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ];
    largestOfFour(array);
    expect(array).toEqual([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ]);
  });
});
