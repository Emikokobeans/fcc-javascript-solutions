const titleCase = require('./11-title-case-a-sentence');

describe('titleCase()', () => {
  test('should return a string', () => {
    expect(typeof titleCase("I'm a little tea pot")).toBe('string');
  });
  test('when given a single letter, should return that letter capitalised', () => {
    expect(titleCase('a')).toBe('A');
  });
  test('when given a word, should return the first letter capitalised', () => {
    expect(titleCase('word')).toBe('Word');
  });
  test('should return the first letter of the given word capitalised and the rest of the letters in lower case', () => {
    expect(titleCase('woRD')).toBe('Word');
  });
  test('should return a string with each first letter capitalised', () => {
    expect(titleCase("I'm a little tea pot")).toBe(`I'm A Little Tea Pot`);
  });
  test('should return a string with each first letter capitalised and all other letters in lower case', () => {
    expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
    expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe(
      'Here Is My Handle Here Is My Spout'
    );
  });
});
