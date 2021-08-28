function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return (str += 'way');
  } else if (str.match(/\b[b-df-hj-np-tv-z]+\b/)) {
    return (str += 'ay');
  } else {
    let splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i) {
      if (!splitStr[i].match(/[aeiou]/)) {
        splitStr.push(splitStr.shift());
      } else {
        let newStr = splitStr.join('');
        return (newStr += 'ay');
      }
    }
  }
}

module.exports = translatePigLatin;
