const rot13 = require('./03-caesars-cipher');

describe('rot13()', () => {
  test('should return a string', () => {
    expect(typeof rot13('SERR PBQR PNZC')).toBe('string');
  });
  test('should return a single character deciphered', () => {
    expect(rot13('S')).toBe('F');
  });
  test('should return a single word deciphered', () => {
    expect(rot13('YBIR')).toBe('LOVE');
  });
  test('should return two words deciphered but the space and special characters is simply passed on', () => {
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
  });
  test('should decipher full sentences', () => {
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe(
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
    );
  });
});
