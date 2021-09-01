const orbitalPeriod = require('./21-map-the-debris');

describe('orbitalPeriod()', () => {
  test('should return an array', () => {
    expect(
      Array.isArray(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]))
    ).toBe(true);
  });
  test('should return an empty array when passed an empty array', () => {
    expect(orbitalPeriod([])).toEqual([]);
  });
  test('should not mutate the original array', () => {
    const first = [{ name: 'sputnik', avgAlt: 35873.5553 }];
    orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
    expect(first).toEqual([{ name: 'sputnik', avgAlt: 35873.5553 }]);
  });
  test('should return the elements average altitude with their orbital periods', () => {
    expect(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])).toEqual([
      { name: 'sputnik', orbitalPeriod: 86400 }
    ]);
  });
  test('should return the same length of the original array', () => {
    expect(
      orbitalPeriod([
        { name: 'iss', avgAlt: 413.6 },
        { name: 'hubble', avgAlt: 556.7 },
        { name: 'moon', avgAlt: 378632.553 }
      ]).length
    ).toBe(
      [
        { name: 'iss', orbitalPeriod: 5557 },
        { name: 'hubble', orbitalPeriod: 5734 },
        { name: 'moon', orbitalPeriod: 2377399 }
      ].length
    );
  });
});
