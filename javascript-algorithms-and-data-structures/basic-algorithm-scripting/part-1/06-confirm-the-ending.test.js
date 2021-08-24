const confirmEnding = require('./06-confirm-the-ending');

describe('confirmEnding()', () => {
  test('should return a boolean', () => {
    expect(typeof confirmEnding('Emily', 'y')).toBe('boolean');
  });
  test('should return true when given a single letter that matches the single letter given', () => {
    expect(confirmEnding('a', 'a')).toBe(true);
  });
  test('should return false when given a single letter that does not the single letter given', () => {
    expect(confirmEnding('a', 'b')).toBe(false);
  });
  test('should return true when given a single letter that matches the last letter of the given word', () => {
    expect(confirmEnding('word', 'd')).toBe(true);
  });
  test('should return false when given a single letter that does not match the last letter of the given word', () => {
    expect(confirmEnding('word', 'g')).toBe(false);
  });
  test('should return true when the series of letters given match the series at the end of the given word or sentence', () => {
    expect(confirmEnding('Open sesame', 'same')).toBe(true);
  });
  test('should return false when the series of letters given do not match the end of the given word or sentence', () => {
    expect(confirmEnding('Open sesame', 'sage')).toBe(false);
  });
});
