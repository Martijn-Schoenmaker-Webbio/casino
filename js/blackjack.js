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

  draw: function() {
    if (this.cardsChosen.length !== 0) {
      $('.btn-draw-card').prop('disabled', true);
      var card = this.cardsChosen[0];
      console.log(card.name + ' of ' + card.type);
      var cardImage = 'img/cards/' + card.image;
      $('.playing-card').attr('src', cardImage);
      $( ".playing-card" ).css('visibility', 'visible');
      $( ".playing-card" ).animate({
        marginTop: "0",
      }, 250, function() {
        $('.playing-card-bottom').attr('src', cardImage);
        $( ".playing-card" ).css('visibility', 'hidden');
        $( ".playing-card" ).css('marginTop', '-20px');
        $('.btn-draw-card').prop('disabled', false);
        $('.playing-card-bottom').css('visibility', 'visible');
      });

      this.cardsChosen.shift();
      var cardsLeft = this.cardsChosen.length;
      $('#cards-left').html(cardsLeft);
      if (cardsLeft === 0) {
        $('.playing-card-left').css('visibility', 'hidden');
      }
    } else {
      alert('out of cards!');
    }
  }
}

var players = [];

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
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var playerID = randLetter + Date.now();
    var playerName = $( '#input-new-player-name' ).val();
    var playerChips = $( '#input-new-player-chips' ).val();
    players.push(new Player(playerID, playerName, playerChips));
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
});
