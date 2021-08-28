const spinalCase = require('./05-spinal-tap-case');

describe('spinalCase()', () => {
  test('should return a string', () => {
    expect(typeof spinalCase('This Is Spinal Tap')).toBe('string');
  });
  test('should return a string sentence joined with a dash instead', () => {
    expect(spinalCase('this is spinal tap')).toBe('this-is-spinal-tap');
  });
  test('should return a string sentence joined with a dash and all in lower case', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
  });
  test('should return a string sentence joined with dashes in a string with no spaces', () => {
    expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
  });
  test('should return a string sentence joined with dashes with a string spaced by non digit/letters', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show');
  });
});
