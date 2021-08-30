const convertHTML = require('./11-convert-html-entities');

describe('convertHTML()', () => {
  test('should return a string', () => {
    expect(typeof convertHTML('Dolce & Gabbana')).toBe('string');
  });
  test('should return a string of a single character into a string of their corresponding HTML entity', () => {
    expect(convertHTML('<')).toBe('&lt;');
  });
  test('should return a string of characters into a string of their corresponding HTML entities', () => {
    expect(convertHTML('<>')).toBe('&lt;&gt;');
  });
  test('should return the string of characters if none of the HTML characters match', () => {
    expect(convertHTML('abc')).toBe('abc');
  });
  test('should return a string with the relevant characters converted', () => {
    expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
  });
  test('should return an empty string when given an empty string', () => {
    expect(convertHTML('')).toBe('');
  });
});
