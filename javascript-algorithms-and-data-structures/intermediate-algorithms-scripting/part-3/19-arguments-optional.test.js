const addTogether = require('./19-arguments-optional');

describe('addTogether()', () => {
  test('should return a number', () => {
    expect(typeof addTogether(2, 3)).toBe('number');
  });
  test('should return the sum of the arguments when two numbers are passed', () => {
    expect(addTogether(2, 3)).toBe(5);
  });
  test('should return undefined if the first argument is not a number', () => {
    expect(addTogether('http://bit.ly/IqT6zt', 3)).toBe(undefined);
  });
  test('should return undefined if the second argument is not a number', () => {
    expect(addTogether(2)([3])).toBe(undefined);
  });
  test('should return a function if only one number is given as an argument', () => {
    expect(typeof addTogether(2)).toBe('function');
  });
  test('should ignore other arguments after the first and second and return the sum of the first two', () => {
    expect(addTogether(2, 3, 4, 5)).toBe(5);
  });
});
