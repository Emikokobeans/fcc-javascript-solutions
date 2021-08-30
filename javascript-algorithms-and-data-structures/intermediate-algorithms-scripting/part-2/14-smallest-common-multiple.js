function smallestCommons(arr) {
  if (arr.some((x) => x === 0)) {
    return 0;
  }

  arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }

  let max = 1;
  for (let i = arr[0]; i <= arr[1]; i++) {
    max *= i;
  }

  for (let i = 1; i <= max; i++) {
    if (newArr.every((x) => i % x === 0)) {
      return i;
    }
  }
}

module.exports = smallestCommons;
