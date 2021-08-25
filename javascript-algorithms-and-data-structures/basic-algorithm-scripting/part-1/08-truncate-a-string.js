function truncateString(str, num) {
  if (str.length > num) {
    str = str.substring(0, num);
    str += '...';
  }

  return str;
}

module.exports = truncateString;
