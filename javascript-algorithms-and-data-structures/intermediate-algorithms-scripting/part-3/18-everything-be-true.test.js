const truthCheck = require('./18-everything-be-true');

describe('truthCheck()', () => {
  test('should return a boolean', () => {
    expect(typeof truthCheck([{ single: 'yes' }], 'single')).toBe('boolean');
  });
  test('should return false when given an empty object', () => {
    expect(truthCheck([{}])).toBe(false);
  });
  test('should return true when given a key with a truthy value', () => {
    expect(truthCheck([{ single: 'yes' }], 'single')).toBe(true);
  });
  test('should return false when given a key with a non truth value', () => {
    expect(truthCheck([{ single: '' }], 'single')).toBe(false);
  });
  test('should return false if the second argument does not exist as a key in the first argument', () => {
    expect(truthCheck([{ single: 'yes' }], 'double')).toBe(false);
  });
  test('should return true when all the values of the second arg are truthy in the object', () => {
    expect(
      truthCheck(
        [
          { user: 'Tinky-Winky', sex: 'male' },
          { user: 'Dipsy', sex: 'male' },
          { user: 'Laa-Laa', sex: 'female' },
          { user: 'Po', sex: 'female' }
        ],
        'sex'
      )
    ).toBe(true);
  });
  test('should return false when all the values of the second arg are non truthy in the object', () => {
    expect(truthCheck([{ single: undefined }, { single: NaN }], 'single')).toBe(
      false
    );
  });
  test('should return false if any of the values of the second arg are non truthy in the object', () => {
    expect(truthCheck([{ single: 'double' }, { single: NaN }], 'single')).toBe(
      false
    );
  });
});
