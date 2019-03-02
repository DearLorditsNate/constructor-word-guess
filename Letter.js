var Letter = function(value) {
    this.value = value;
    this.placeHolder = "_";
    this.guessed = false;
    this.hasBeenGuessed = function() {
        if (this.guessed) {
            return this.value;
        } else {
            return this.placeHolder;
        }
    }
    this.checkLetter = function(guess) {
        if (guess === this.value) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;