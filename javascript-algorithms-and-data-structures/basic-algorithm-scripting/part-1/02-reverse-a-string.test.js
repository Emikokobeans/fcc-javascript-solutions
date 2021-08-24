const { expect } = require('@jest/globals');
const reverseString = require('./02-reverse-a-string.js');

describe('reverseString()', () => {
  test('should return a string', () => {
    expect(reverseString('')).toBe('');
  });
  test('should return a single given word reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('should return a entire given sentence reversed with spaces', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
  });
});
