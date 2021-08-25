const truncateString = require('./08-truncate-a-string');

describe('truncateString()', () => {
  test('should return a string', () => {
    expect(typeof truncateString('A', 1)).toBe('string');
  });
  test('should return the entire string without ... at the end when given the same length', () => {
    expect(truncateString('A', 1)).toBe('A');
  });
  test('should return the entire string without ... when given a longer length', () => {
    expect(truncateString('A', 2)).toBe('A');
  });
  test('should return the string truncated with ... appended when given a shorter length', () => {
    expect(truncateString('Absolutely Longer', 2)).toBe('Ab...');
  });
});
