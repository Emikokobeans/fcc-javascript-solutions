const repeatStringNumTimes = require('./07-repeat-a-string');

describe('repeatStringNumTimes()', () => {
  test('should return a string', () => {
    expect(typeof repeatStringNumTimes('*', 0)).toBe('string');
  });
  test('should return an empty string when the number is less than one', () => {
    expect(repeatStringNumTimes('abc', 0)).toBe('');
  });
  test('should return the string if the number given is one', () => {
    expect(repeatStringNumTimes('abc', 1)).toBe('abc');
  });
  test('should return the string repeated by the number given if it is over 1', () => {
    expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc');
    expect(repeatStringNumTimes('*', 8)).toBe('********');
  });
});
