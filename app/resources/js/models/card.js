var card = function(number, colour, style, shape) {


    /**
     *  Render the card from the template to the target
     * @param $target
     * @param $template
     * @param index
     */
    function render($target, $template, index) {

        var compiled = _.template($template.html());
        $target.append(compiled({ card : this, index: index }));

    }

    return {
        number: number,
        colour: colour,
        style: style,
        shape: shape,
        render: render
    }
};

module.exports = card;
