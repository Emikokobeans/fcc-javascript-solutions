function uniteUnique(...arr) {
  const flatArr = arr.flat();
  return [...new Set(flatArr)];
}

module.exports = uniteUnique;
