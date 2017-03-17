import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Load in the models
import Deck from '../components/deck';
import CardsRemaining from '../components/cards-remaining';
import { selectCard } from '../actions/card_select';

class App extends Component {

    /**
     *
     * @returns {XML}
     */

    render() {
        return (
            <div>
                <h2><CardsRemaining remaining={this.props.remaining}/></h2>
                <Deck deck={this.props.deck} selectCard={this.props.selectCard}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        remaining: state.remaining,
        deck: state.deck,
        hand: state.hand
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCard: selectCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);