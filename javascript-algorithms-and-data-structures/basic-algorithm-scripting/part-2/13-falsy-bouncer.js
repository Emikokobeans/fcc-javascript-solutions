function bouncer(arr) {
  const noFalsy = arr.filter(Boolean);
  return noFalsy;
}

module.exports = bouncer;
