const mutation = require('./15-mutations');

describe('mutations()', () => {
  test('should return a boolean', () => {
    expect(typeof mutation(['hello', 'hey'])).toBe('boolean');
  });
  test('should return true is first element in the array contains all the letters in the second array', () => {
    expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toBe(true);
  });
  test('should disregard casing', () => {
    expect(mutation(['hello', 'Hello'])).toBe(true);
  });
  test('should return false if the letters in the first element are not in the second', () => {
    expect(mutation(['hello', 'hey'])).toBe(false);
  });
});
