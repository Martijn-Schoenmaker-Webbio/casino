var drawCard = {
  cards:
  [
      {name: 'Ace', type: 'Hearts', value: [1,11], image: 'svg/AH.svg'},
      {name: 'King', type: 'Hearts', value: 10, image: 'svg/KH.svg'},
      {name: 'Queen', type: 'Hearts', value: 10, image: 'svg/QH.svg'},
      {name: 'Jack', type: 'Hearts', value: 10, image: 'svg/JH.svg'},
      {name: '10', type: 'Hearts', value: 10, image: 'svg/10H.svg'},
      {name: '9', type: 'Hearts', value: 9, image: 'svg/9H.svg'},
      {name: '8', type: 'Hearts', value: 8, image: 'svg/8H.svg'},
      {name: '7', type: 'Hearts', value: 7, image: 'svg/7H.svg'},
      {name: '6', type: 'Hearts', value: 6, image: 'svg/6H.svg'},
      {name: '5', type: 'Hearts', value: 5, image: 'svg/5H.svg'},
      {name: '4', type: 'Hearts', value: 4, image: 'svg/4H.svg'},
      {name: '3', type: 'Hearts', value: 3, image: 'svg/3H.svg'},
      {name: '2', type: 'Hearts', value: 2, image: 'svg/2H.svg'},
      {name: 'Ace', type: 'Diamonds', value: [1,11], image: 'svg/AD.svg'},
      {name: 'King', type: 'Diamonds', value: 10, image: 'svg/KD.svg'},
      {name: 'Queen', type: 'Diamonds', value: 10, image: 'svg/QD.svg'},
      {name: 'Jack', type: 'Diamonds', value: 10, image: 'svg/JD.svg'},
      {name: '10', type: 'Diamonds', value: 10, image: 'svg/10D.svg'},
      {name: '9', type: 'Diamonds', value: 9, image: 'svg/9D.svg'},
      {name: '8', type: 'Diamonds', value: 8, image: 'svg/8D.svg'},
      {name: '7', type: 'Diamonds', value: 7, image: 'svg/7D.svg'},
      {name: '6', type: 'Diamonds', value: 6, image: 'svg/6D.svg'},
      {name: '5', type: 'Diamonds', value: 5, image: 'svg/5D.svg'},
      {name: '4', type: 'Diamonds', value: 4, image: 'svg/4D.svg'},
      {name: '3', type: 'Diamonds', value: 3, image: 'svg/3D.svg'},
      {name: '2', type: 'Diamonds', value: 2, image: 'svg/2D.svg'},
      {name: 'Ace', type: 'Clubs', value: [1,11], image: 'svg/AC.svg'},
      {name: 'King', type: 'Clubs', value: 10, image: 'svg/KC.svg'},
      {name: 'Queen', type: 'Clubs', value: 10, image: 'svg/QC.svg'},
      {name: 'Jack', type: 'Clubs', value: 10, image: 'svg/JC.svg'},
      {name: '10', type: 'Clubs', value: 10, image: 'svg/10C.svg'},
      {name: '9', type: 'Clubs', value: 9, image: 'svg/9C.svg'},
      {name: '8', type: 'Clubs', value: 8, image: 'svg/8C.svg'},
      {name: '7', type: 'Clubs', value: 7, image: 'svg/7C.svg'},
      {name: '6', type: 'Clubs', value: 6, image: 'svg/6C.svg'},
      {name: '5', type: 'Clubs', value: 5, image: 'svg/5C.svg'},
      {name: '4', type: 'Clubs', value: 4, image: 'svg/4C.svg'},
      {name: '3', type: 'Clubs', value: 3, image: 'svg/3C.svg'},
      {name: '2', type: 'Clubs', value: 2, image: 'svg/2C.svg'},
      {name: 'Ace', type: 'Spades', value: [1,11], image: 'svg/AS.svg'},
      {name: 'King', type: 'Spades', value: 10, image: 'svg/KS.svg'},
      {name: 'Queen', type: 'Spades', value: 10, image: 'svg/QS.svg'},
      {name: 'Jack', type: 'Spades', value: 10, image: 'svg/JS.svg'},
      {name: '10', type: 'Spades', value: 10, image: 'svg/10S.svg'},
      {name: '9', type: 'Spades', value: 9, image: 'svg/9S.svg'},
      {name: '8', type: 'Spades', value: 8, image: 'svg/8S.svg'},
      {name: '7', type: 'Spades', value: 7, image: 'svg/7S.svg'},
      {name: '6', type: 'Spades', value: 6, image: 'svg/6S.svg'},
      {name: '5', type: 'Spades', value: 5, image: 'svg/5S.svg'},
      {name: '4', type: 'Spades', value: 4, image: 'svg/4S.svg'},
      {name: '3', type: 'Spades', value: 3, image: 'svg/3S.svg'},
      {name: '2', type: 'Spades', value: 2, image: 'svg/2S.svg'}
  ],

  shuffle: function(byPlayer, decks) {
    var willShuffle;

    if (byPlayer === true) {
      willShuffle = confirm('Are you sure you want to shuffle ' + decks + ' decks of cards?');
    } else {
      willShuffle = true;
    }

    if (willShuffle === true) {
      $('.playing-card').attr('src', '');
      $('.playing-card-bottom').css('visibility', 'hidden');
      $('.playing-card-left').css('visibility', 'visible');
      var allDecks = [];
      var cardsInDeck = [];
      for (var i = 0; i < decks; i++) {
        var cardsInDeck = this.cards;
        Array.prototype.push.apply(allDecks, cardsInDeck);
      }
      var shuffled = _.shuffle(allDecks);
      this.cardsChosen = shuffled;
      var cardsLeft = this.cardsChosen.length;
      $('#cards-left').html(cardsLeft);
      $('#deck-amount').html(decks);
    } else {
      console.log('not shuffled');
    }
  },

  cardsChosen: [],

  drawCard: function() {
    //Check if there are any cards left in the deck.
    if (this.cardsChosen.length !== 0) {

      //Set the card to draw to the first object in the array of the shuffled deck.
      var card = this.cardsChosen[0];

      //Remove the card from the array.
      this.cardsChosen.shift();

      return card;

    } else {
      alert('out of cards!');
    }
  },

  draw: function() {
    //Check if there are any cards left in the deck.
    if (this.cardsChosen.length !== 0) {

      //Disable the button so the user cannot click faster.
      $('.btn-draw-card').prop('disabled', true);

      //Set the card to draw to the first object in the array of the shuffled deck.
      var card = this.cardsChosen[0];

      //Set image of card
      var cardImage = 'img/cards/' + card.image;

      //Log the cardname and type
      console.log(card.name + ' of ' + card.type);

      //Display the card
      $('.playing-card').attr('src', cardImage);

      //Set visibility of card to visible
      $('.playing-card').css('visibility', 'visible');

      //Animate card
      $('.playing-card').animate({
        marginTop: '0',
      }, 250, function() {
        $('.playing-card-bottom').attr('src', cardImage);
        $( '.playing-card' ).css('visibility', 'hidden');
        $( '.playing-card' ).css('marginTop', '-20px');
        $('.btn-draw-card').prop('disabled', false);
        $('.playing-card-bottom').css('visibility', 'visible');
      });

      //Remove the card from the array.
      this.cardsChosen.shift();

      //Set the amount of cards left
      var cardsLeft = this.cardsChosen.length;
      $('#cards-left').html(cardsLeft);

      //Check if there are any cards left. If not then hide the closed deck.
      if (cardsLeft === 0) {
        $('.playing-card-left').css('visibility', 'hidden');
      }
    } else {
      alert('out of cards!');
    }
  }
}

$(document).ready(function() {

  class Player {
    constructor(id, name, chips) {
      this.id = id;
      this.name = name;
      this.chips = chips;
      this.cards = [];
    }
  }

  $( '.btn-add-player' ).click(function() {
    console.log('test')
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var playerID = randLetter + Date.now();
    var playerName = $( '#input-new-player-name' ).val();
    var playerChips = $( '#input-new-player-chips' ).val();
    players.push(new Player(playerID, playerName, playerChips));
    console.log(players)
  });

  var input = $( '#input-deck-amount' )[0];
  var decks = Number(input.value);
  drawCard.shuffle(false, decks);

  $( '.btn-draw-card' ).click(function() {
    drawCard.draw();
  });
  $( '.btn-shuffle' ).click(function() {
    var decks = Number(input.value);
    drawCard.shuffle(true, decks);
  });

  input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          $( '.btn-shuffle' ).click();
      }
  });

  var players = [
  {type: 'player', name: 'Henk', bet: 20, cards: [], totalValue: 0},
  {type: 'player', name: 'Joe', bet: 15, cards: [], totalValue: 0},
  {type: 'player', name: 'Vera', bet: 30, cards: [], totalValue: 0}
  ];

  function playBlackJack(players) {
    var allPlayers = [{type: 'dealer', name: 'Dealer', cards: [], totalValue: 0}];
    Array.prototype.push.apply(allPlayers, players);
    var playerAmount = allPlayers.length;
    console.log('There are ' + playerAmount + ' players playing the game.');
    console.log(allPlayers);
    var done = 0;

    for (var j = 0; j < 2; j++) {
      console.log('========== DEAL ' + (j + 1) + ' ==========');
      for (var i = 0; i < playerAmount; i++) {
        var card = drawCard.drawCard();
        if (card.value.length) {
          allPlayers[i].totalValue += 11;
        } else {
          allPlayers[i].totalValue += card.value;
        }
        allPlayers[i].cards.push(card);
        console.log(allPlayers[i]);
      }
    }

    if (confirm('Next round?')) {
      var dealer = allPlayers[0];
      for (var g = 1; g < playerAmount; g++) {
        var anotherHit = 1;
        var currentPlayer = allPlayers[g];
        for (var h = 0; h < anotherHit; h++) {
          if (confirm('Hi ' + currentPlayer.name + ', do you want to hit or stay?')) {
            console.log(currentPlayer.name + ' wants to hit');
            var card = drawCard.drawCard();
            if (card.name === 'Ace') {
              card.value = 1;
            }
            console.log(currentPlayer.name + ' got a ' + card.name + ' of ' + card.type + ' with a value of ' + card.value);
            currentPlayer.totalValue += card.value;
            console.log(currentPlayer.name + ' has ' + currentPlayer.totalValue + ' points.');
            if (currentPlayer.totalValue > 21) {
              console.log(currentPlayer.name + ' busted!');
              currentPlayer.bet = 0;
            } else {
              h--;
            }
          } else{
            console.log(currentPlayer.name + ' stays with ' + currentPlayer.totalValue);
          }
        }
      }
      console.log('Dealer has a total value of ' + dealer.totalValue);
      anotherHit = 1;
      if (dealer.totalValue < 17) {
        for (var i = 0; i < anotherHit; i++) {
          console.log('Dealer will draw a card');
          var card = drawCard.drawCard();
          dealer.totalValue += card.value;
          console.log('Dealer drew a ' + card.name + ' of ' + card.type + ' with a value of ' + card.value);
          console.log('Dealer has now a total of ' + dealer.totalValue + ' points.');
          if (dealer.totalValue < 17) {
            i--;
          } else if (dealer.totalValue > 21) {
            console.log('Dealer busts');
          } else {
            console.log('Dealer stays');
          }
        }
      } else if (dealer.totalValue > 21) {
        console.log('Dealer busts');
      } else {
        console.log('Dealer stays');
      }
    }

  }

  // playBlackJack(players);
});
