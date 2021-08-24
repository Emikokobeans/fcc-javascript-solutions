const { expect } = require('@jest/globals');
const findLongestWordLength = require('./04-find-the-longest-word-in-a-string');

describe('findLongestWordLength()', () => {
  test('should return a number', () => {
    expect(
      typeof findLongestWordLength(
        'The quick brown fox jumped over the lazy dog'
      )
    ).toBe('number');
  });
  test('should return 0 when passed an empty string', () => {
    expect(findLongestWordLength('')).toBe(0);
  });
  test('should return the longest word length in the provided sentence', () => {
    expect(
      findLongestWordLength('The quick brown fox jumped over the lazy dog')
    ).toBe(6);
    expect(findLongestWordLength('May the force be with you')).toBe(5);
    expect(
      findLongestWordLength(
        'What if we try a super-long word such as otorhinolaryngology'
      )
    ).toBe(19);
  });
});
