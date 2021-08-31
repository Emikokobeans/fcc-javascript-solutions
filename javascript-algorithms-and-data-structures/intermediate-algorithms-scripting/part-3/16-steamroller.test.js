const steamrollArray = require('./16-steamroller');

describe('steamrollArray()', () => {
  test('should return an array', () => {
    expect(Array.isArray(steamrollArray([[['a']], [['b']]]))).toBe(true);
  });
  test('should return an empty array when passed an empty array', () => {
    expect(steamrollArray([])).toEqual([]);
  });
  test('should return an empty array when passed an array of nested empty arrays', () => {
    expect(steamrollArray([[], [[]]])).toEqual([]);
  });

  test('should flatten a single value in a two dimensional array', () => {
    expect(steamrollArray([[1]])).toEqual([1]);
  });
  test('should flatten multiple values in a two dimensional array', () => {
    expect(steamrollArray([[1], [2]])).toEqual([1, 2]);
  });
  test('should flatten a multiple nested array', () => {
    expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
  });
  test('should flatten a varying number of nested arrays in a array', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });
});
