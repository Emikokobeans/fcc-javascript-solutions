const binaryAgent = require('./17-binary-agents');

describe('binaryAgent()', () => {
  test('should return a string', () => {
    expect(typeof binaryAgent('01000001')).toBe('string');
  });
  test('should return an empty string when passed an empty string', () => {
    expect(binaryAgent('')).toBe('');
  });
  test('should return a single binary code into the correlating character', () => {
    expect(binaryAgent('01000001')).toBe('A');
  });
  test('should return a binary code sentence into English', () => {
    expect(
      binaryAgent(
        '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
      )
    ).toBe("Aren't bonfires fun!?");
  });
});
