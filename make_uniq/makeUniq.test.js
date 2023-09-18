const makeUniq = require("./makeUniq");

test("make the array uniq", () => {
  expect(makeUniq(["a", 1, "a", 2, "1"])).toStrictEqual(["a", 1, 2, "1"]);
})