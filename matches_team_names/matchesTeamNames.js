const homeTeamNames = (names) => {
  return names.map(name => name["home_team_name"]);
}

module.exports = homeTeamNames;