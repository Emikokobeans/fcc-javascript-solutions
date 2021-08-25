const findElement = require('./09-finders-keepers');

describe('findElement', () => {
  test('should return a number if a number from the given array passes the given function', () => {
    expect(
      typeof findElement([1, 3, 5, 8, 9, 10], function (num) {
        return num % 2 === 0;
      })
    ).toBe('number');
  });
  test('should return undefined if none of the numbers from the array pass the given function', () => {
    expect(
      findElement([1, 3, 5, 9], function (num) {
        return num % 2 === 0;
      })
    ).toBe(undefined);
  });
  test('should return the number if the number from the given array passes the given function', () => {
    expect(
      findElement([1, 3, 5, 8, 9, 10], function (num) {
        return num % 2 === 0;
      })
    ).toBe(8);
  });
});
