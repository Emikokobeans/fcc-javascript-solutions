const dropElements = require('./15-drop-it');

describe('dropElements()', () => {
  test('should return an array', () => {
    expect(
      Array.isArray(
        dropElements([1, 2, 3, 4], function (n) {
          return n >= 3;
        })
      )
    ).toBe(true);
  });
  test('should return an empty array when passed an empty array', () => {
    expect(
      dropElements([], function (n) {
        return n >= 3;
      })
    ).toEqual([]);
  });
  test('should return the single value in an array when it returns true to the function', () => {
    expect(
      dropElements([1], function (n) {
        return n === 1;
      })
    ).toEqual([1]);
  });
  test('should return an empty array when the single value in the given array return false to the function', () => {
    expect(
      dropElements([0], function (n) {
        return n === 1;
      })
    ).toEqual([]);
  });
  test('should return the full provided array when the first value passes the function', () => {
    expect(
      dropElements([1, 0, 1], function (n) {
        return n === 1;
      })
    ).toEqual([1, 0, 1]);
  });

  test('should return the remainder of the array once the function hits a value that returns true', () => {
    expect(
      dropElements([1, 2, 3, 4], function (n) {
        return n >= 3;
      })
    ).toEqual([3, 4]);
  });
  test('should return the remainder of the array even if some of the values do not pass the function', () => {
    expect(
      dropElements([1, 2, 3, 9, 2], function (n) {
        return n > 2;
      })
    ).toEqual([3, 9, 2]);
  });
});
