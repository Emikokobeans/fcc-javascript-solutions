function checkCashRegister(price, cash, cid) {
  const currency = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    'ONE HUNDRED': 10000
  };

  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = '';

  let cidSum = 0;
  let filteredCid = cid.filter((item) => item[1] !== 0).reverse();

  filteredCid.forEach((item) => {
    let curr = item[0];
    let currSum = item[1] * 100;

    cidSum += currSum;
    let amount = 0;
    while (changeSum >= currency[curr] && currSum > 0) {
      amount += currency[curr];
      changeSum -= currency[curr];
      currSum -= currency[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { status: status, change: change };
}

module.exports = checkCashRegister;
