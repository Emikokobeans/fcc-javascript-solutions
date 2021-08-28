const myReplace = require('./07-search-and-replace');

describe('myReplace()', () => {
  test('should return a string', () => {
    expect(typeof myReplace('Let us go to the store', 'store', 'mall')).toBe(
      'string'
    );
  });
  test('should return the sentence/word with the second word replaced by the third', () => {
    expect(myReplace('word', 'word', 'changed')).toBe('changed');
  });
  test('should preserve the casing of the word being replaced', () => {
    expect(myReplace('Word', 'Word', 'changed')).toBe('Changed');
  });
  test('should return the sentence with the second word replaced by the third', () => {
    expect(myReplace('Let us go to the store', 'store', 'mall')).toBe(
      'Let us go to the mall'
    );
  });
  test('should preserve the casing of the word in a sentence', () => {
    expect(myReplace('I think we should look up there', 'up', 'Down')).toBe(
      'I think we should look down there'
    );
  });
});
