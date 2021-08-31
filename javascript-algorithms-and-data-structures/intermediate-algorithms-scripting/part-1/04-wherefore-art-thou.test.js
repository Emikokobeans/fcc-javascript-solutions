const whatIsInAName = require('./04-wherefore-art-thou');

describe('whatIsInAName()', () => {
  test('should return an array', () => {
    expect(
      Array.isArray(
        whatIsInAName(
          [
            { first: 'Romeo', last: 'Montague' },
            { first: 'Mercutio', last: null },
            { first: 'Tybalt', last: 'Capulet' }
          ],
          { last: 'Capulet' }
        )
      )
    ).toBe(true);
  });
  test('should return an empty array if none of the values in the second array matches in the first', () => {
    expect(
      whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })
    ).toEqual([]);
  });
  test('should return an array of matching name and value pairs', () => {
    expect(
      whatIsInAName(
        [
          { first: 'Romeo', last: 'Montague' },
          { first: 'Mercutio', last: null },
          { first: 'Tybalt', last: 'Capulet' }
        ],
        { last: 'Capulet' }
      )
    ).toEqual([{ first: 'Tybalt', last: 'Capulet' }]);
  });

  test('should return an array of matching name and value pairs, so long the second object exists within it', () => {
    expect(
      whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
        apple: 1
      })
    ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
  });
});
