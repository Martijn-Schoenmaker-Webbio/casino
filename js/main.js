// $(document).ready(function() {
//
// });

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var baseTeamA = {players: 9, lives: 3, startDie: 1};
var baseTeamB = {players: 3, lives: 3, startDie: 3};


function startGame(amount) {
  var logged = {teamAScore: 0, teamBScore: 0};
  for (var z = 0; z < amount; z++) {
    //console.log('________________________GAMEEEE START____________________');
    var teamA = Object.assign({players: 1, lives: 1, startDie: 1}, baseTeamA);
    var teamB = Object.assign({players: 1, lives: 1, startDie: 1}, baseTeamB);
    for (var i = 0; i < teamA.players; i++) {
      teamA.lives = 3;
      //console.log('==== TEAM A PLAYERS: ' + (teamA.players - i));
      for (var g = 0; g < teamA.lives; g++) {
        //console.log('==== TEAM A LIVES: ' + (teamA.lives - g));
        var teamAResult = [];
        var teamBResult = [];
        //team A
        for (var j = 0; j < teamA.startDie; j++) {
          teamAResult.push(dice.roll());
        }

        //team B
        for (var k = 0; k < teamB.startDie; k++) {
          teamBResult.push(dice.roll());
        }
        //console.log(teamAResult);
        //console.log(teamBResult);
        teamAResult = Math.max(...teamAResult);
        teamBResult = Math.max(...teamBResult);

        if (teamAResult > teamBResult || teamAResult === teamBResult) {
          //console.log('teamAResult wins!');
          teamB.startDie -= 1;
          teamA.lives += 1;
          if (teamB.startDie === 0) {
            if (teamB.lives > 0) {
              teamB.startDie = 3;
              teamB.lives -= 1;
            } else {
              //console.log('???????TeamA wins!');
              logged.teamAScore += 1;
              //console.log(logged);
              teamA.lives = 0;
              teamA.players = 0;
            }
          }

        } else {
          //console.log('teamBResult wins!');
        }
      }

    }
    //console.log('???????TeamB wins!');
    //console.log(logged);
  }
  logged.teamBScore += z - logged.teamAScore;
  console.log(logged);
  console.log('A wint ' + (logged.teamAScore / z * 100) + '% van de tijd.');
}

function startGames(x) {
  var logged2 = [];
  for (var i = 0; i < x; i++) {
    startGame();
    // logged2.push(logged);
  }
}

var array = {One: 0, Two: 0, Three: 0, Four: 0, Five: 0, Six: 0};

function rollDice(x) {

  for (var i = 0; i < x; i++) {
    var random = Math.floor(Math.random() * 6) + 1;
    if (random === 1) {
      array.One += 1;
    } else if (random === 2) {
      array.Two += 1;
    } else if (random === 3) {
      array.Three += 1;
    } else if (random === 4) {
      array.Four += 1;
    } else if (random === 5) {
      array.Five += 1;;
    } else if (random === 6) {
      array.Six += 1;
    }
  }
  array.Six = array.Six / x * 100 ;
  console.log(array);
}

function diceFight(playerA, playerB, games) {
  var wins = {teamA: 0, teamAP: 0, teamB: 0, teamBP: 0, even: 0, evenP: 0};
  for (var j = 0; j < games; j++) {
    teamAResult = [];
    teamBResult = [];

    for (var i = 0; i < playerA; i++) {
      teamAResult.push(Math.floor(Math.random() * 6) + 1);
    }
    for (var z = 0; z < playerB; z++) {
      teamBResult.push(Math.floor(Math.random() * 6) + 1);
    }

    teamAResult = Math.max(...teamAResult);
    teamBResult = Math.max(...teamBResult);

    if (teamAResult > teamBResult) {
      wins.teamA ++;
    } else if (teamAResult < teamBResult) {
      wins.teamB ++;
    }
    else {
      wins.even ++;
    }

  }
  wins.teamAP = wins.teamA / games * 100;
  wins.teamBP = wins.teamB / games * 100;
  wins.evenP = wins.even / games * 100;
  return wins;
}
