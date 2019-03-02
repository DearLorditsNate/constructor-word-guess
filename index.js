/*
===============================
Initialize Packages
===============================
*/

var Word = require("./Word");

var inquirer = require("inquirer");

/*
===============================
Global Varialbes
===============================
*/

// Word Array
var words = [
    "WORDONE",
    "WORDTWO",
    "WORDTHREE"
];

// Stores word object
var word;

/*
===============================
Function Declarations
===============================
*/

// Get random word
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

// Generate new random word object
function newRandomWord() {
    word = new Word(getRandomWord(words));
}

// Prompt letter guess
function promptLetterGuess() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letter"
        }
    ]).then(answers => {
        word.hasLetter(answers.letter);
        console.log(word.makeString());
        promptLetterGuess();
    });
}

// Initialize game
function initialize() {
    newRandomWord();
    console.log(word.makeString());
    promptLetterGuess();
}

/*
===============================
Function Calls
===============================
*/

initialize();
