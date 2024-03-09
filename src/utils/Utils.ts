export function makeDuos(persons: string[]) {
  if (persons.length % 2 !== 0) {
    throw Error('A quantidade de pessoas necessárias para criar duplas deve ser par!')
  }

  const shuffledPersons =  persons.sort(() => Math.random() - 0.5)

  const duos = []

  while (shuffledPersons.length) {
    duos.push(`${shuffledPersons.shift()} e ${shuffledPersons.shift()}`)
  }

  return duos;
}

export function getAllCombinationsMinimizeConsecutive(teams: string[]) {
  const n = teams.length;
  const gamesPerRound = n / 2;
  const rounds = n - 1;
  
  const combinations = [];
  let round = [];
  
  // Cria as combinações para o primeiro round
  for (let i = 0; i < gamesPerRound; i++) {
    round.push([teams[i], teams[n - 1 - i]]);
  }
  combinations.push(round);
  
  // Cria as combinações para os rounds seguintes
  for (let r = 1; r < rounds; r++) {
    round = [];
    const shiftTeam = teams[1];
    
    for (let i = 0; i < gamesPerRound; i++) {
      const team1 = teams[i];
      let team2 = teams[(r + i) % (n - 1)];
      
      // Garante que o mesmo time não jogue consecutivamente
      if (team2 === shiftTeam) {
        team2 = teams[(r + i + 1) % (n - 1)];
      }
      
      round.push([team1, team2]);
    }
    
    combinations.push(round);
  }
  
  return combinations;
}

