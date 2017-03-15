import React, {Component} from 'react';
import ReactDom from 'react-dom';

// Load in the models
import Deck from './models/deck';
import Hand from './models/hand';
import CardsRemaining from './models/cards-remaining';

class App extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            remaining: 30,
            hand: new Hand()
        };
        this.setCardsRemaining = this.setCardsRemaining.bind(this);
    }

    setCardsRemaining(cardCount) {
        this.setState({ remaining : cardCount });
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h2><CardsRemaining remaining={this.state.remaining} /></h2>
                <Deck hand={this.state.hand} setCardsRemaining={this.setCardsRemaining} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector(".container"));

