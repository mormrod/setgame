export function selectCard(card) {
    if (card.state.selected === '') {
        card.setState({ selected : "selected" });
    } else {
        card.setState({ selected : "" });
    }

    return {
        type: 'CARD_SELECTED',
        payload: card
    }
}
