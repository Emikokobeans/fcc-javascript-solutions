const telephoneCheck = require('./04-telephone-number-validator');

describe('telephoneCheck()', () => {
  test('should return a boolean', () => {
    expect(typeof telephoneCheck('1(555)555-5555')).toBe('boolean');
  });
  test('should return false if there are more than 11 digits given', () => {
    expect(telephoneCheck('275762273822')).toBe(false);
  });
  test('should return false if there are less than 10 digits given', () => {
    expect(telephoneCheck('55555555')).toBe(false);
  });
  test('should return false if non relevant characters are given', () => {
    expect(telephoneCheck('123**&!!asdf#')).toBe(false);
  });
  test('should return false if the initial number exists and is not 1', () => {
    expect(telephoneCheck('2 (757) 622-7382')).toBe(false);
  });
  test('should return false if given in a incorrect format', () => {
    expect(telephoneCheck('55 55-55-555-5')).toBe(false);
  });
  test('should return true in the following formats', () => {
    expect(telephoneCheck('555-555-5555')).toBe(true);
    expect(telephoneCheck('(555)555-5555')).toBe(true);
    expect(telephoneCheck('(555) 555-5555')).toBe(true);
    expect(telephoneCheck('555 555 5555')).toBe(true);
    expect(telephoneCheck('5555555555')).toBe(true);
    expect(telephoneCheck('1 555 555 5555')).toBe(true);
  });
});
