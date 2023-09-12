const encryptObject = require("./encryptObject");

test('{"a1": "a"} encrypted should be {"a1": "b"}', () => {
  expect(encryptObject({ 'a1': 'a' }, 1)).toStrictEqual({ 'a1': 'b' });
});

test('{"a2": "a"} encrypted should be {"a2": "c"}', () => {
  expect(encryptObject({ 'a2': 'a' }, 2)).toStrictEqual({ 'a2': 'c' });
});