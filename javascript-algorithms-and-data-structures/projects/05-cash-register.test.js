const checkCashRegister = require('./05-cash-register');

describe('checkCashRegister()', () => {
  test('should return an object', () => {
    expect(
      typeof checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
      ])
    ).toBe('object');
  });
  test('should return an object with a status key', () => {
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
      ]).hasOwnProperty('status')
    ).toBe(true);
  });
  test('should return an object with a change key', () => {
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
      ]).hasOwnProperty('change')
    ).toBe(true);
  });
  test('should return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.', () => {
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 1],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ])
    ).toEqual({ status: 'INSUFFICIENT_FUNDS', change: [] });
  });

  test('should return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.', () => {
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ])
    ).toEqual({
      status: 'CLOSED',
      change: [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ]
    });
  });
  test('should return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.', () => {
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
      ])
    ).toEqual({ status: 'OPEN', change: [['QUARTER', 0.5]] });
  });
});
