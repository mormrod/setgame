// Load in the card model
var card = require('./card');

// Load in the setup arrays
var number = require('../arrays/number');
var colour = require('../arrays/colour');
var style = require('../arrays/style');
var shape = require('../arrays/shape');


var deck = (function(_) {

    var collection = [];

    /**
     *  Return a random number, passing in the upper bound
     * @param upper
     * @returns {Number|number}
     */
    function returnRandom(upper) {

        return _.random(0, upper);

    }

    /**
     *  Initialise the deck, passing in the number of cards to create
     * @param numberOfCards
     */
    function initialiseDeck(numberOfCards) {

        collection = [];

        for (var x = 0; x < numberOfCards; x++) {

            collection.push(new card(
                number[returnRandom(number.length - 1)],
                colour[returnRandom(colour.length - 1)],
                style[returnRandom(style.length - 1)],
                shape[returnRandom(shape.length - 1)]
            ));

        }

    }

    function returnCollection() {

        return collection;

    }

    /**
     *  Render deck of cards
     * @param $target
     * @param $template
     */
    function render($target, $template) {

        for (var card in collection) {

            collection[card].render($target, $template, card);

        }

    }

    return {
        initialise: initialiseDeck,
        render: render,
        raw: returnCollection
    }

})(_);


module.exports = deck;
