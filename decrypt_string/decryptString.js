function decryptString(string, num) {
  const test = string.split("").map(char => char.charCodeAt() - num);
  return test.map(code => String.fromCharCode(code)).join("");
}

module.exports = decryptString;