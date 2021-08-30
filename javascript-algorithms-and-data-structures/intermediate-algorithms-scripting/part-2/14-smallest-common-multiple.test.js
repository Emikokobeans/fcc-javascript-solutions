const smallestCommons = require('./14-smallest-common-multiple');

describe('smallestCommons()', () => {
  test('should return a number', () => {
    expect(typeof smallestCommons([1, 5])).toBe('number');
  });
  test('should return 0 if both given numbers in the array are 0', () => {
    expect(smallestCommons([0, 0])).toBe(0);
  });
  test('should return 0 if either of the given numbers is 0', () => {
    expect(smallestCommons([0, 1])).toBe(0);
  });
  test('should return the smallest common multiple of two sequential numbers', () => {
    expect(smallestCommons([1, 2])).toBe(2);
  });

  test('should return the smallest common multiple between the two given numbers in the array and the range between them', () => {
    expect(smallestCommons([1, 5])).toBe(60);
  });
});
