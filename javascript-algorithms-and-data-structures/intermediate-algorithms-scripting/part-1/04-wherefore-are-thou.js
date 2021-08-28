function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for (let property in source) {
    collection = collection.filter(
      (item) =>
        item.hasOwnProperty(property) && item[property] === source[property]
    );
  }

  // Only change code above this line
  // return arr;
  return collection;
}

module.exports = whatIsInAName;

// this one was annoying because it is impossible? to do without changing the original lines of code given.
// had to change return arr to return collection.
