var Letter = function(value) {
    this.value = value;
    this.placeHolder = "_";
    this.guessed = false;
    this.hasBeenGuessed = function() {
        if (guessed) {
            return this.value;
        } else {
            return this.placeHolder;
        }
    }
    this.checkLetter = function(guess) {
        if (guess === this.value) {
            this.gussed = true;
        }
    }
}

module.exports = Letter;