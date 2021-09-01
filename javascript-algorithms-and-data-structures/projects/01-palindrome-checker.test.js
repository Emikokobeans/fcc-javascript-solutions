const palindrome = require('./01-palindrome-checker');

describe('palindrome()', () => {
  test('should return a boolean', () => {
    expect(typeof palindrome('eye')).toBe('boolean');
  });
  test('should return true if given a single letter', () => {
    expect(palindrome('a')).toBe(true);
  });
  test('should return true if given two identical letters', () => {
    expect(palindrome('bb')).toBe(true);
  });
  test('should return false if given two different letters', () => {
    expect(palindrome('bc')).toBe(false);
  });
  test('should return true when the word is a palindrome', () => {
    expect(palindrome('eye')).toBe(true);
  });
  test('should return false when the word is not a palindrome', () => {
    expect(palindrome('nope')).toBe(false);
  });
  test('should return true if the sentence is a palindrome', () => {
    expect(palindrome('never odd or even')).toBe(true);
  });
  test('should return true if the sentence is a palindrome ignoring non letters or digits and case', () => {
    expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);
  });
});
