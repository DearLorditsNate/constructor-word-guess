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
    "ONE",
    "TWO",
    "THREE"
];

// Stores word object
var word;

// Stores string to print
var string;

// Stores guesses remaining
var guessesRemaining = 10;

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
        word.hasLetter(answers.letter.toUpperCase());
        string = word.makeString();
        console.log("Guesses remaining: " + guessesRemaining);
        console.log(string);
        if (hasWon(string)) {
            console.log("\nGreat job! You won!\n");
            newRound();
        } else if (hasLost()) {
            console.log("\nSorry, you lost...\n");
            newRound();
        } else {
            promptLetterGuess();
        }
    });
}

// Check for win conditions
function hasWon(word) {
    var guessed = true;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === "_") {
            guessed = false;
        }
    }
    return guessed;
}

// Check for loss conditions
function hasLost() {
    if (guessesRemaining <= 0) {
        return true;
    } else {
        return false;
    }
}

// New round
function newRound() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Play again", "I'm done"],
            message: "Do you want to play again?",
            name: "choice"
        }
    ]).then(answer => {
        if (answer.choice === "Play again") {
            initialize();
        } else {
            console.log("\nThanks for playing!\n");
        }
    });
}

// Initialize game
function initialize() {
    guessesRemaining = 10;
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
