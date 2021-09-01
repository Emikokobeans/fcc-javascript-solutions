function addTogether() {
  const [first, second] = arguments;

  if (typeof first !== 'number') {
    return undefined;
  }

  if (!second) {
    return (second) => addTogether(first, second);
  }
  if (typeof second !== 'number') {
    return undefined;
  }
  return first + second;
}

module.exports = addTogether;
