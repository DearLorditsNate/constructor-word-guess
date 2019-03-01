var Word = require("./Word");

var words = [
    "WORDONE",
    "WORDTWO",
    "WORDTHREE"
];

// Get random word
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

var word = new Word(getRandomWord(words));

console.log(word);