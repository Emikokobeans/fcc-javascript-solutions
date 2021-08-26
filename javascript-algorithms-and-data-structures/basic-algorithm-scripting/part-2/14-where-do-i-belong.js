function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
}

module.exports = getIndexToIns;
