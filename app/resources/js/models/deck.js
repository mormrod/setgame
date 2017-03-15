import React, {Component} from 'react';
import Card from './card';
import _ from 'lodash';

const number = require('../arrays/number');
const colour = require('../arrays/colour');
const style = require('../arrays/style');
const shape = require('../arrays/shape');

class Deck extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {
            numberOfCards : 30,
            cards: [],
            hand: props.hand,
            setCardsRemaining: props.setCardsRemaining
        };

        this.buildDeck();
        this.removeHandFromDeck = this.removeHandFromDeck.bind(this);

    }

    buildDeck() {
        for (var x = 0; x < this.state.numberOfCards; x++) {
            this.state.cards.push({
                    id : x,
                    number : number[this.returnRandom(number.length - 1)],
                    colour : colour[this.returnRandom(colour.length - 1)],
                    style : style[this.returnRandom(style.length - 1)],
                    shape : shape[this.returnRandom(shape.length - 1)]
                }
            );
        }
    }

    removeHandFromDeck(hand) {
        _.remove(this.state.cards, (card) => {
            for (var h = 0; h < hand.length; h ++) {
                if (hand[h].props.id === card.id) {
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
            this.state.cards.map((card) => {
                return (
                    <Card
                        id={card.id}
                        key={card.id}
                        number={card.number}
                        colour={card.colour}
                        style={card.style}
                        shape={card.shape}
                        hand={this.state.hand}
                        removeHandFromDeck={this.removeHandFromDeck}
                    />
                );
            })
        );
    }

    /**
     *
     * @param upper
     * @returns {number}
     */
    returnRandom(upper) {
        return _.random(0, upper);
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