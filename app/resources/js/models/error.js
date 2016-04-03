var error = (function() {

    var errorBag = [];

    /**
     *  Add error to error bag
     * @param error
     */
    function addToErrorBag(error) {

        errorBag.push(error);

    }

    /**
     *  Clear the error bag
     */
    function clearErrorBag() {

        errorBag = [];

    }

    /**
     *  Return the error bag
     * @returns {Array}
     */
    function returnErrorBag() {

        return errorBag;

    }

    /**
     *  Render the error bag to html
     * @returns {*}
     */
    function render() {

        var returnString = "";

        for (var error in errorBag) {

            returnString += '<p>' + errorBag[error] + '</p>';

        }

        return returnString;

    }


    /**
     *  Displayed the rendered html into the target
     * @param $target
     */
    function display($target) {

        $target.html(render());

    }

    return {
        add: addToErrorBag,
        clear: clearErrorBag,
        bag: returnErrorBag,
        display: display
    }

})();

module.exports = error;
