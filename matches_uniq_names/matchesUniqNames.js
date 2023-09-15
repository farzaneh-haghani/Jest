const uniqNames = (names) => {
  return names.filter((name, index) => names.indexOf(name) === index);
}

module.exports = uniqNames;