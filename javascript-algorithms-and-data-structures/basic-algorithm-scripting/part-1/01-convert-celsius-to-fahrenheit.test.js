const { expect } = require('@jest/globals');
const convertToF = require('./01-convert-celsius-to-fahrenheit-solution.js');

describe('convertToF', () => {
  test('when passed 0, should return a number', () => {
    expect(typeof convertToF(0)).toBe('number');
  });
  test('should convert the number representing celsius into fahrenheit', () => {
    expect(convertToF(0)).toBe(32);
    expect(convertToF(-30)).toBe(-22);
    expect(convertToF(20)).toBe(68);
  });
});
