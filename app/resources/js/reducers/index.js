import {combineReducers} from 'redux';
import CardsRemaining from './reducer_cards_remaining';
import Deck from './reducer_deck';
import Hand from './reducer_hand';

const rootReducer = combineReducers({
    remaining: CardsRemaining,
    deck: Deck,
    hand: Hand
});

export default rootReducer;