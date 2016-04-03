var hand = (function() {

    var collection = [];

    /**
     *  Add card to hand
     * @param card
     */
    function addToHand(card) {

        collection.push(card);

    }

    /**
     *  Reset hand
     */
    function resetHand() {

        collection = [];

    }

    /**
     *  Render hand of cards
     * @param $target
     * @param $template
     */
    function render($target, $template) {

        for (var card in collection) {

            collection[card].render($target, $template, card);

        }

    }

    function returnCollection() {

        return collection;

    }

    function checkHand() {

        var numberMatches = 0;
        var colourMatches = 0;
        var styleMatches = 1;
        var shapeMatches = 0;

        if (collection[0].number == collection[1].number && collection[1].number == collection[2].number && collection[0].number == collection[2].number) {
            numberMatches++;
        }

        if (collection[0].number != collection[1].number && collection[1].number != collection[2].number && collection[0].number != collection[2].number) {
            numberMatches++;
        }

        if (collection[0].colour == collection[1].colour && collection[1].colour == collection[2].colour && collection[0].colour == collection[2].colour) {
            colourMatches++;
        }

        if (collection[0].colour != collection[1].colour && collection[1].colour != collection[2].colour && collection[0].colour != collection[2].colour) {
            colourMatches++;
        }

        //if (collection[0].style == collection[1].style && collection[1].style == collection[2].style && collection[0].style == collection[2].style) {
        //    styleMatches++;
        //}
        //
        //if (collection[0].style != collection[1].style && collection[1].style != collection[2].style && collection[0].style != collection[2].style) {
        //    styleMatches++;
        //}

        if (collection[0].shape == collection[1].shape && collection[1].shape == collection[2].shape && collection[0].shape == collection[2].shape) {
            shapeMatches++;
        }

        if (collection[0].shape != collection[1].shape && collection[1].shape != collection[2].shape && collection[0].shape != collection[2].shape) {
            shapeMatches++;
        }

        if (numberMatches > 0 && colourMatches > 0 && styleMatches > 0 && shapeMatches > 0) {
            console.log(true);
        } else {
            console.log(false);
        }

        resetHand();

    }

    return {
        add: addToHand,
        reset: resetHand,
        check: checkHand,
        raw: returnCollection,
        render: render
    }

})();

module.exports = hand;