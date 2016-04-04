// Load in the models
var deck = require('./models/deck');
var hand = require('./models/hand');
var error = require('./models/error');

// Initialise variables
var $body = $("body");
var $mainContent = $("#mainContent");
var $errors = $("#errors");


// Initialise the deck
deck.initialise(30);

// Render the deck
deck.render($mainContent, $("#card"));

/**
 *  If the errors change, then either display or hide them
 * @param event
 */
function errorsChange() {

    var $this = $("#errors");

    if ($this.html().length > 0) {
        $this.show();
    } else {
        $this.hide();
    }

}

/**
 *  When the card is clicked, run this
 * @param event
 */
function clickCard(event) {

    // Set variables
    var $card = $(".card");
    var $this = $(event.target);
    var $thisCard = $this.closest($card);
    var index = $thisCard.attr("data-id");

    // If this card is not already selected
    if (!$thisCard.hasClass("selected")) {

        // Select the card
        $thisCard.addClass("selected");

        // Add the card to the hand
        hand.add(deck.raw()[index]);

        // If the hand has 3 cards in it then do this
        if (hand.raw().length === 3) {

            // Check if the hand is valid and if it is remove the cards from the screen
            if (hand.check()) {
                $(".card.selected").remove();
                $(".cards-remaining").html($(".card").length);
            }

            error.display($errors);
            error.clear();
            errorsChange();

            // Reset all the cards to the unselected state
            $card.removeClass("selected");
        }

    }

}

// Event listener
$body.on("click", ".card", clickCard);




