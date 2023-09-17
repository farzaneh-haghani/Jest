const matchesTeamNames = require("../matches_team_names/matchesTeamNames");
const sortStrings = require("../matches_sort_strings/matchesSortNames")
const uniqNames = require("../matches_uniq_names/matchesUniqNames")


const listAllTeams = (records) => {
  const names = matchesTeamNames(records);
  const uniq = uniqNames(names);
  return sortStrings(uniq);
}

module.exports = listAllTeams;