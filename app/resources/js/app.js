// Load in the models
var deck = require('./models/deck');
var hand = require('./models/hand');

var $body = $("body");


// Initialise the deck
deck.initialise(15);

// Render the deck
deck.render($body, $("#card"));

function clickCard(event) {

    var $this = $(event.target);
    var index = $this.attr("data-id");

    hand.add(deck.raw[index]);

    if (hand.raw().length === 3) {
        hand.check();
    }

}

$body.on("click", clickCard);




