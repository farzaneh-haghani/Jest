const decryptString = require("./decryptString");

test('Gbs{bofi decrypted should be Farzaneh', () => {
  expect(decryptString("Gbs{bofi", 1)).toBe("Farzaneh");
});