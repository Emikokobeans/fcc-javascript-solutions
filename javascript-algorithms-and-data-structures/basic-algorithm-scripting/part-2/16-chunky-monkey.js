function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length / size; i++) {
    result.push(arr.slice(i * size, i * size + size));
  }
  return result;
}

module.exports = chunkArrayInGroups;
