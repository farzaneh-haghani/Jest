function encryptString(string, num) {
  if (typeof (string) === "number") {
    return string
  }
  const codes = string.split("").map((char) => char.charCodeAt() + num);
  return codes.map(code => String.fromCharCode(code)).join("");
}

module.exports = encryptString