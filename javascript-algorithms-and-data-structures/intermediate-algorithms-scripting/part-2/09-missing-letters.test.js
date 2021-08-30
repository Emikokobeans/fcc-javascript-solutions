const fearNotLetter = require('./09-missing-letters');

describe('fearNotLetter()', () => {
  test('should return a string', () => {
    expect(typeof fearNotLetter('abce')).toBe('string');
  });
  test('should return a string with the length of one', () => {
    expect(fearNotLetter('abce').length).toBe(1);
  });
  test('should return the missing letter from the passed letter range', () => {
    expect(fearNotLetter('abce')).toBe('d');
  });
  test('should return undefined if no letters are missing', () => {
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
  });
});
