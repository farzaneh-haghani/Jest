function makeUniq(myArray) {
  return [...new Set(myArray)];
}

module.exports = makeUniq;