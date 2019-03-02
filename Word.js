var Letter = require("./Letter");

var Word = function(word) {
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word.charAt(i)));
    }
    this.makeString = function() {
        var string = "";
        for (var i = 0; i < this.letters.length; i++) {
            string += this.letters[i].hasBeenGuessed();
        }
        return string;
    }
    this.hasLetter = function(guess) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkLetter(guess);
            if (this.letters[i].checkLetter(guess)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

module.exports = Word;