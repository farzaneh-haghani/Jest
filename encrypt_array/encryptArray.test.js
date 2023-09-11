const encryptArray = require("./encryptArray");

test('["a"] encrypted should be ["b"]', () => {
  expect(encryptArray(['a'], 1)).toStrictEqual(['b']);
});


test('["a", "b"] encrypted should be ["b", "c"]', () => {
  expect(encryptArray(['a', 'b'], 1)).toStrictEqual(['b', 'c']);
});

test('["a", 1] encrypted should be ["c",1] when the number 2 is passed in', () => {
  expect(encryptArray(['a', 1], 2)).toStrictEqual(['c', 1])
})
