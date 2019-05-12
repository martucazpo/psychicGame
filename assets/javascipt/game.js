

var letters = ["a", "b", "c", "d", "e", "f", "g", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var guessesLeft, guessedLettters, lettertoGuess;

resetGame();
display();
 
document.onkeyup = function(event){
    var guess = event.key;

    if (guess === letterToGuess) {
        win();
    } else if (guessesLeft -1 === 0) {
        lost();
    }
    else { 
        fail(guess);
    }

    display();
}

function display() {
    var winsP = document.getElementById("winsText");
    var losesP = document.getElementById("losesText");
    var guessLeft = document.getElementById("numberGuessesText");
    var letterGuessed = document.getElementById("lettersGuessedText");
    winsP.textContent = "wins: " + wins;
    losesP.textContent = "loses: " + loses;
    guessLeft.textContent = "guesses left: " + guessesLeft;
    letterGuessed.textContent = "letters guessed: " + guessedLetters.join(',');
}

function win(){
    wins++;
    resetGame();
}

function lost(){
    loses++;
    resetGame();
}

function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
}

function resetGame(){
    guessesLeft = 10;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}
