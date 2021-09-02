function telephoneCheck(str) {
  const regex =
    /^1{0,1}\s{0,1}((\(\d{3}\))|(\d{3}))[- ]{0,1}\d{3}[- ]{0,1}\d{4}$/;
  return regex.test(str);
}

module.exports = telephoneCheck;
