import _ from 'lodash';

function addCardToHand(hand, card) {
    hand.push(card);
    return hand;
}

function removeCardFromHand(hand, card) {
    _.remove(hand, (handCard) => {
        return handCard.state.id === card.state.id;
    });
    return hand;
}

function checkHand(hand) {
    let numberMatches = 0;
    let colourMatches = 0;
    let styleMatches = 0;
    let shapeMatches = 0;
    let removeFromScreen = false;
    let cards = hand;

    if (cards[0].state.number == cards[1].state.number && cards[1].state.number == cards[2].state.number && cards[0].state.number == cards[2].state.number) {
        numberMatches++;
    }

    if (cards[0].state.number != cards[1].state.number && cards[1].state.number != cards[2].state.number && cards[0].state.number != cards[2].state.number) {
        numberMatches++;
    }

    if (numberMatches === 0) {

        console.log("Numbers are not all the same or all different");


    }

    if (cards[0].state.colour == cards[1].state.colour && cards[1].state.colour == cards[2].state.colour && cards[0].state.colour == cards[2].state.colour) {
        colourMatches++;
    }

    if (cards[0].state.colour != cards[1].state.colour && cards[1].state.colour != cards[2].state.colour && cards[0].state.colour != cards[2].state.colour) {
        colourMatches++;
    }

    if (colourMatches === 0) {

        console.log("Colours are not all the same or all different");

    }

    if (cards[0].state.style == cards[1].state.style && cards[1].state.style == cards[2].state.style && cards[0].state.style == cards[2].state.style) {
        styleMatches++;
    }

    if (cards[0].state.style != cards[1].state.style && cards[1].state.style != cards[2].state.style && cards[0].state.style != cards[2].state.style) {
        styleMatches++;
    }

    if (styleMatches === 0) {

        console.log("Styles are not all the same or all different");

    }

    if (cards[0].state.shape == cards[1].state.shape && cards[1].state.shape == cards[2].state.shape && cards[0].state.shape == cards[2].state.shape) {
        shapeMatches++;
    }

    if (cards[0].state.shape != cards[1].state.shape && cards[1].state.shape != cards[2].state.shape && cards[0].state.shape != cards[2].state.shape) {
        shapeMatches++;
    }

    if (shapeMatches === 0) {

        console.log("Shapes are not all the same or all different");

    }

    if (numberMatches > 0 && colourMatches > 0 && styleMatches > 0 && shapeMatches > 0) {
        removeFromScreen = true;
    }

    return removeFromScreen;
}

export default function(hand = [], action) {
    switch(action.type) {
        case "CARD_SELECTED":
            let card = action.payload;
            if (card.state.selected === '') {
                hand = addCardToHand(hand, card);
            } else {
                hand = removeCardFromHand(hand, card);
            }

            if (hand.length === 3) {
                if(checkHand(hand)) {
                    console.log("CORRECT - remove hand from deck");
                } else {
                    hand.map((card) => {
                        card.setState({ selected : '' });
                    });
                    hand = [];
                    console.log(hand);
                }
            }
            return hand;
    }
    return hand;
}