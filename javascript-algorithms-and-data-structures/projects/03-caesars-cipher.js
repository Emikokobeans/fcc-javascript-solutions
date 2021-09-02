function rot13(str) {
  const arr = str.split('').map((char) => {
    if (/[a-z]/i.test(char)) {
      if (char.charCodeAt(0) + 13 >= 91) {
        return String.fromCharCode(65 + (13 - (91 - char.charCodeAt(0))));
      } else {
        return String.fromCharCode(char.charCodeAt(0) + 13);
      }
    }
    return char;
  });
  return arr.join('');
}

module.exports = rot13;

// ASCII
