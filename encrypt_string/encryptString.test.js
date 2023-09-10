const encryptString = require("./encryptString")

test('a encrypted should be b', () => {
  expect(encryptString('a', 1)).toBe("b");
});

test('ab encrypted should be cd when the number 2 is passed in', () => {
  expect(encryptString('ab', 2)).toBe("cd");
});

test('numbers are not encrypted', () => {
  expect(encryptString(1, 1)).toBe(1);
});

test('Farzaneh encrypted should be Gbs{bofi', () => {
  expect(encryptString('Farzaneh', 1)).toBe("Gbs{bofi");
});
