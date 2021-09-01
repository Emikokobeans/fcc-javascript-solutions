function palindrome(str) {
  str = str.match(/[a-z0-9]/gi);
  let originalString = str.join('').toLowerCase();
  let reverseString = (str = str.reverse().join('').toLowerCase());

  if (originalString === reverseString) return true;

  return false;
}

module.exports = palindrome;
