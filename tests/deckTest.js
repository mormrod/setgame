var deck = require('../app/resources/js/models/deck');

beforeEach(function () {

    deck.initialise(10);

});

it ("should initialise the deck with the given number of cards", function () {

    expect(deck.raw().length === 10).toBe(true);

});
