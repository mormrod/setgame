import React, {Component} from 'react';
import Card from './card';

class Deck extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    removeHandFromDeck() {
        _.remove(this.state.cards, (card) => {
            for (var h = 0; h < this.state.hand.length; h ++) {
                if (this.state.hand[h].props.id === card.id) {
                    return true;
                }
            }
        });

        this.setState(this.state.cards);
        this.state.setCardsRemaining(this.state.cards.length);
    }

    /**
     *
     * @returns {function(*)}
     */
    renderCards() {
        return (
            this.props.deck.map((card) => {
                return (
                    <Card
                        id={card.id}
                        key={card.id}
                        number={card.number}
                        colour={card.colour}
                        style={card.style}
                        shape={card.shape}
                        selectCard={this.props.selectCard}
                    />
                );
            })
        );
    }

    checkForMatches() {
        let numberMatches = 0;
        let colourMatches = 0;
        let styleMatches = 0;
        let shapeMatches = 0;
        let removeFromScreen = false;
        let cards = this.state.hand;

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

    /**
     *
     * @param card
     */
    addCardToHand(card) {
        if (this.state.hand.length < 3) {
            this.state.hand.push(card);
        }

        if (this.state.hand.length === 3) {
            if (this.checkForMatches()) {
                card.state.removeHandFromDeck(this.state.hand);
            }
            this.resetHand();
        }
    }

    /**
     *
     * @param cardToRemove
     */
    removeCardFromHand(cardToRemove) {
        _.remove(this.state.hand, function(card) {
            return card.key === cardToRemove.key;
        });
    }

    resetHand() {
        for (var c = 0; c < this.state.hand.length; c ++) {
            this.state.hand[c].setState({ selected : '' });
        }
        this.setState({ hand : [] });
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                { this.renderCards() }
            </div>
        );
    }

}

export default Deck;