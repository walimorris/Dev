// Set Spinner element and word array
const spinnerElement = document.getElementById('word-spinner');
const words = ["DEVELOPER.", "CREATOR.", "THINKER.", "BUILDER."];

/**
 * Helper class to keep track of the current word based on index. Using
 * properties allows the spinner to keep track of index and pass new
 * index at every set interval.
 * @param array array of words
 * @param index index of first word to begin spinner
 * @constructor
 */
function WordSpinnerHelper(array, index) {
    this.array = array;
    this.index = index;
    this.size = array.length;
}

let spinnerHelper = new WordSpinnerHelper(words, 0);
setInterval(function() {setWord(spinnerElement, spinnerHelper);}, 2000);

/**
 * Sets new word to pass at interval by pulling the current word from the
 * current index in spinnerHelper.
 * @param spinnerEl The spinner element from DOM
 * @param spinnerHelper Object holding array
 */
function setWord(spinnerEl, spinnerHelper) {
    let index = spinnerHelper.index;
    spinnerEl.textContent = spin(spinnerHelper, spinnerHelper.array[index]);
}

/**
 * Receives SpinnerHelper and current word living at current SpinnerHelper
 * index. We return the first word if we are currently on the last, or the
 * next word.
 * @param spinner SpinnerHelper Object
 * @param word The current word
 * @returns {*}
 */
function spin(spinner, word) {
    if (spinner.array[spinner.index] === word &&
        spinner.index === spinner.size - 1) {
        //return first word
        spinner.index = 0;
        return spinner.array[0];
    }
    // go to next word
    spinner.index = spinner.index + 1;
    return spinner.array[spinner.index];
}