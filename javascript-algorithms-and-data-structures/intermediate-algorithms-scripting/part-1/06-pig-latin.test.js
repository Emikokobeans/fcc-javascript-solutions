const translatePigLatin = require('./06-pig-latin');

describe('translatePigLatin()', () => {
  test('should return a string', () => {
    expect(typeof translatePigLatin('california')).toBe('string');
  });
  test('should return way added to the end of a vowel given', () => {
    expect(translatePigLatin('a')).toBe('away');
  });

  test('should return the string with way added if it begins with a vowel', () => {
    expect(translatePigLatin('algorithm')).toBe('algorithmway');
  });
  test('if word begins with a consonant, move the letter to the end and add ay to the end', () => {
    expect(translatePigLatin('paragraphs')).toBe('aragraphspay');
  });
  test('if word begins with consonants, move the consonant cluster to the end and add ay to the end', () => {
    expect(translatePigLatin('schwartz')).toBe('artzschway');
  });
  test('if there are no vowels in the word, return with ay added to the end', () => {
    expect(translatePigLatin('rhythm')).toBe('rhythmay');
  });
});
