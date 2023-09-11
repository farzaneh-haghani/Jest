const encryptString = require("../encrypt_string/encryptString");

function encryptArray(array, num) {
  return array.map((string) => encryptString(string, num));
}

module.exports = encryptArray;