import React, {Component} from 'react';

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            colour: props.colour,
            shape: props.shape,
            number: props.number,
            style: props.style,
            selected: '',
            hand: props.hand,
            selectCard: props.selectCard,
            addCardToHand: props.addCardToHand,
            removeCardFromHand: props.removeCardFromHand,
            removeHandFromDeck: props.removeHandFromDeck
        };
        this.cardIsClicked = this.cardIsClicked.bind(this);
    }

    /**
     *
     * @returns {Array}
     */
    renderSymbols() {
        let output = [];
        for (var i = 1 ; i <= this.state.number; i ++) {
            output.push(<i key={i} className={`fa fa-${this.state.shape}${this.state.style}`}></i>);
        }
        return output;
    };

    cardIsClicked() {
        if (this.state.selected === '') {
            this.addToHand();
        } else {
            this.removeFromHand();
        }
    }

    addToHand() {
        this.setState({ selected : 'selected'});
        this.state.addCardToHand(this);
    }

    removeFromHand() {
        this.setState({ selected : '' });
        console.log(this.state);
        this.state.removeCardFromHand(this);
    }

    render() {
        return (
            <div ref="cardEl" key={this.state.id} onClick={() => this.state.selectCard(this)} className={`card ${this.state.colour} ${this.state.shape} ${this.state.selected}`}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            { this.renderSymbols() }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

};

export default Card;