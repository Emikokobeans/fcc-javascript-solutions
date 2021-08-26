const frankenSplice = require('./12-slice-and-splice');

describe('frankenSplice', () => {
  test('should return an array', () => {
    expect(Array.isArray(frankenSplice([1, 2, 3], [4, 5], 1))).toBe(true);
  });
  test('should return a copy of each element from the first array into the second array inserted at index n', () => {
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  });
  test('does not mutate the first array after the function runs', () => {
    const arr1 = [1, 2, 3];
    frankenSplice(arr1, [4, 5], 1);
    expect(arr1).toEqual([1, 2, 3]);
  });
  test('does not mutate the second array after the function runs', () => {
    const arr2 = ['head', 'shoulders', 'knees', 'toes'];
    frankenSplice(['claw', 'tentacle'], arr2, 2);
    expect(arr2).toEqual(['head', 'shoulders', 'knees', 'toes']);
  });
});
