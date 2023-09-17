const listAllTeams = require("./matches");

const fs = require("fs");
const { parse } = require('csv-parse/sync');

let content = fs.readFileSync('./matches/matches.csv');

const records = parse(content, {
  columns: true,
  skip_empty_lines: true
});


test("List all team names uniq and sorted", () => {
  expect(listAllTeams(records)).toStrictEqual(["AFC Bournemouth", "Arsenal", "Brighton & Hove Albion", "Burnley", "Cardiff City", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Huddersfield Town", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Southampton", "Tottenham Hotspur", "Watford", "West Ham United", "Wolverhampton Wanderers"]);
})