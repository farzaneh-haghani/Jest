const sortNames = require("./matchesSortNames");

test("Sort team names", () => {
  expect(sortNames(["Jarrod", "Faz"])).toStrictEqual(["Faz", "Jarrod"]);
});