const team = {
  _players: [
    { firstName: "John", lastName: "Smith", Age: 20 },
    { firstName: "Will", lastName: "Smoth", Age: 21 },
    { firstName: "Park", lastName: "Smath", Age: 22 }
  ],
  _games: [
    { opponent: "Broncos", teamPoints: 42, appointmentPoints: 21 },
    { opponent: "Wolves", teamPoints: 41, appointmentPoints: 20 },
    { opponent: "Lions", teamPoints: 23, appointmentPoints: 25 },
  ],
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
    this.players.push(player);
  },

  addGame(oppName, point, oppPoints){
    const game = {
      opponent: oppGame,
      points: points,
      opponentPoints: oppPoints
    }
    this.game.push(game);
  }
}

team.addPlayer("Ludwig", "Chap", 28);
team.addPlayer("Matt", "Stonie", 30);

console.log(team.players);
team.addGame("Sea Lions", 100, 50);

