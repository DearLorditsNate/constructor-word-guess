var Letter = require("./Letter");

var word = "test";

// console.log(word.length);

var Word = function(word) {
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word.charAt(i)));
    }
}

var testWord = new Word(word);

console.log(testWord);