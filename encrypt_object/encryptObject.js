const encryptString = require("../encrypt_string/encryptString")

function encryptObject(obj, num) {
  const newObject = {};
  Object.keys(obj).forEach(key => newObject[key] = encryptString(obj[key], num));
  return newObject;
}

module.exports = encryptObject;