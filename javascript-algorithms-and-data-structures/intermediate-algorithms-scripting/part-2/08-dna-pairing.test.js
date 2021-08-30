const pairElement = require('./08-dna-pairing');

describe('pairElement()', () => {
  test('should return an array', () => {
    expect(Array.isArray(pairElement('ATCGA'))).toBe(true);
  });
  test('should return an empty array when passed an empty string', () => {
    expect(pairElement('')).toEqual([]);
  });
  test('should return a nested array of A and T when passed the single letter A', () => {
    expect(pairElement('A')).toEqual([['A', 'T']]);
  });
  test('should return the respective pairing when given a single letter of either, A, G, T, or C', () => {
    expect(pairElement('T')).toEqual([['T', 'A']]);
    expect(pairElement('G')).toEqual([['G', 'C']]);
    expect(pairElement('C')).toEqual([['C', 'G']]);
  });
  test('should return an array of nested arrays when given a string of relevant letters', () => {
    expect(pairElement('GCG')).toEqual([
      ['G', 'C'],
      ['C', 'G'],
      ['G', 'C']
    ]);
  });
});
