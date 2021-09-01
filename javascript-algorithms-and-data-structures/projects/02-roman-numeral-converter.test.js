const convertToRoman = require('./02-roman-numeral-converter');

describe('convertToRoman()', () => {
  test('should return a string', () => {
    expect(typeof convertToRoman(2)).toBe('string');
  });
  test('should return a single digit number converted into its corresponding roman numeral', () => {
    expect(convertToRoman(1)).toBe('I');
  });
  test('should return a double digit number converted into its corresponding roman numeral', () => {
    expect(convertToRoman(21)).toBe('XXI');
  });
  test('should return larger numbers converted into its corresponding roman numeral', () => {
    expect(convertToRoman(891)).toBe('DCCCXCI');
    expect(convertToRoman(1000)).toBe('M');
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });
});
