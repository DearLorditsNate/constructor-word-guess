var Letter = require("./Letter");

// var word = "test";

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
        }
    }
}

module.exports = Word;

// var testWord = new Word(word);

// console.log(testWord);

// console.log(testWord.makeString());

// console.log(testWord.hasLetter("t"));