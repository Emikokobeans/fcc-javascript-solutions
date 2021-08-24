function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return str + repeatStringNumTimes(str, num - 1);
}

module.exports = repeatStringNumTimes;
