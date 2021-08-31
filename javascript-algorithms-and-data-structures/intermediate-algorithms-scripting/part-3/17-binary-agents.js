function binaryAgent(str) {
  return !str
    ? ''
    : str
        .split(' ')
        .map((char) => String.fromCharCode(parseInt(char, 2)))
        .join('');
}

module.exports = binaryAgent;
