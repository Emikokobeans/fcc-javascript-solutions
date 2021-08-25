const booWho = require('./10-boo-who');

describe('booWho()', () => {
  test('should return a boolean', () => {
    expect(typeof booWho(true)).toBe('boolean');
  });
  test('should return true if the given value is a boolean value', () => {
    expect(booWho(true)).toBe(true);
  });
  test('should return false if the given value is not a boolean value', () => {
    expect(booWho(null)).toBe(false);
    expect(booWho([1, 2, 3])).toBe(false);
  });
});
