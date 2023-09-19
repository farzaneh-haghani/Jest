const sortNumbers = require("./sortNumbers");

test("Sort numbers", () => {
  expect(sortNumbers([5, 2, 1])).toStrictEqual([1, 2, 5]);
});