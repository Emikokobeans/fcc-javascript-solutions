function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const period = [];

  for (let planet in arr) {
    let orbit = Math.round(
      2 *
        Math.PI *
        Math.sqrt(Math.pow(arr[planet].avgAlt + earthRadius, 3) / GM)
    );
    period.push({ name: arr[planet].name, orbitalPeriod: orbit });
  }
  return period;
}

module.exports = orbitalPeriod;
