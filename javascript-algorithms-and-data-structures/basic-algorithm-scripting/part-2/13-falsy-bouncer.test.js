const bouncer = require('./13-falsy-bouncer');

describe('bouncer()', () => {
  test('should return an array', () => {
    expect(Array.isArray(bouncer([7, 'ate', '', false, 9]))).toBe(true);
  });
  test('should remove all falsy values from the given array', () => {
    expect(bouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
  });
  test('should return an empty array when all values are falsy', () => {
    expect(bouncer([false, null, 0, NaN, undefined, ''])).toEqual([]);
  });
});
