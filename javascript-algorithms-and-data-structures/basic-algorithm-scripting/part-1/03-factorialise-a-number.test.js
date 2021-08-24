const { expect } = require('@jest/globals');
const factorialize = require('./03-factorialise-a-number');

describe('factorialise()', () => {
  test('should return a number', () => {
    expect(typeof factorialize(5)).toBe('number');
  });
  test('should return 1 if less than 1', () => {
    expect(factorialize(0)).toBe(1);
  });
  test('should return the factorial of the provided integer', () => {
    expect(factorialize(5)).toBe(120);
    expect(factorialize(10)).toBe(3628800);
  });
});
