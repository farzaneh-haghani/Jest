const homeTeamNames = require("./matchesTeamNames");

test("List team names", () => {
  expect(homeTeamNames([{ "home_team_name": "Faz" }, { "home_team_name": "Jarrod" }])).toStrictEqual(["Faz", "Jarrod"]);
});
