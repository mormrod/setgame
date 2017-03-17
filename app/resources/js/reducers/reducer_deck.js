const number = require('../arrays/number');
const colour = require('../arrays/colour');
const style = require('../arrays/style');
const shape = require('../arrays/shape');
import _ from 'lodash';

/**
 *
 * @param upper
 * @returns {number}
 */
function returnRandom(upper) {
    return _.random(0, upper);
}

function deckReducer() {

    var deckArray = [];
    for (var x = 0 ; x < 30; x ++) {
        deckArray.push({
            id: x,
            number: number[returnRandom(number.length - 1)],
            colour: colour[returnRandom(colour.length - 1)],
            style: style[returnRandom(style.length - 1)],
            shape: shape[returnRandom(shape.length - 1)]
        });
    }

    return deckArray;
}

export default deckReducer;
