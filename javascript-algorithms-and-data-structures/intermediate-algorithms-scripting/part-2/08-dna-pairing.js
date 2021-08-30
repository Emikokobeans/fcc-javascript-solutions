function pairElement(str) {
  const arr = str.split('').map((letter) => {
    if (letter === 'C') {
      return ['C', 'G'];
    } else if (letter === 'G') {
      return ['G', 'C'];
    } else if (letter === 'T') {
      return ['T', 'A'];
    } else if (letter === 'A') {
      return ['A', 'T'];
    }
  });
  return arr;
}

module.exports = pairElement;
