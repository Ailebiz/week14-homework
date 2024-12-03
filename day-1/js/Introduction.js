
let footballPlayer = {
    firstName: "Артем",
    lastName: "Казаков",
    age: 25,
    goals: 10,
    teams: ["Алматы", "Астана", "Қайрат"]
  };
  
  footballPlayer.goals += 2;
  

  function getFullName(player) {
    return `${player.firstName} ${player.lastName}`;
  }

  function getCurrentTeam(player) {
    return player.teams[player.teams.length - 1];
  }
  
  console.log("Толық аты: ", getFullName(footballPlayer));
  console.log("Қазіргі клубы: ", getCurrentTeam(footballPlayer));
  console.log("Ойыншының гол саны:", footballPlayer.goals);
  