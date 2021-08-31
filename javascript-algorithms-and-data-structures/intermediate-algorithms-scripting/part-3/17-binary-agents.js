function binaryAgent(str) {
  return str.length === 0
    ? ''
    : str
        .split(' ')
        .map((char) => String.fromCharCode(parseInt(char, 2)))
        .join('');
}

module.exports = binaryAgent;
