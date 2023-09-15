const uniqNames = require("./matchesUniqNames");

test("list all uniq team names", () => {
  expect(uniqNames([1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
});

test("list all uniq team names", () => {
  expect(uniqNames([-1, -1, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual([-1, 1, 2, 3, 4]);
});

test("list all uniq team names", () => {
  expect(uniqNames([null, null, null, -1, -1, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual([null, -1, 1, 2, 3, 4]);
});

test("list all uniq team names", () => {
  expect(uniqNames(['a', -1, -1, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual(['a', -1, 1, 2, 3, 4]);
});