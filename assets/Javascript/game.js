function set_win_loss(){
    
    var wins = 0;
    document.getElementById('wins').innerHTML = wins;
    var losses = 0;
    document.getElementById('losses').innerHTML = losses;
    var playerGuess;
    var playerGuesses = [];
    var guessesLeft = 15;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
}

    //This will hold an array of letters (the Alphabet)
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*
var difficultyLevel = ["Easy", "Medium", "Hard"];
for (var i = 0; i < difficultyLevels.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = difficultyLevels[i];
    button.setAttribute('level', difficultyLevels[i]);
    document.getElementById('game').append(button);
    button.onclick = function () {
        playGame(this.getAttribute('level'));
    };
}
*/

function playGame(/*level*/) {

    /*
        if (level === "Easy") {
            guaessesLeft = 15;
        } else if (level === "Medium") {
            guaessesLeft = 10;
        } else {
            guessesLeft = 5;
        }
    */
    //Randomizer for computer to pick a letter
    var computerpick = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerpick);



    document.onkeypress = function (event) {
        var usersGuessedLetter = event.key;
        console.log(usersGuessedLetter);



        if (playerGuesses.indexOf(usersGuessedLetter) === -1) {
            guessesLeft--;
            document.getElementById('guessesLeft').innerHTML = guessesLeft;

            playerGuesses.push(usersGuessedLetter);

            document.getElementById('guessed-letters').innerHTML = playerGuesses;

            if (computerpick === usersGuessedLetter) {
                wins++;
                document.getElementById('wins').innerHTML = wins;
                playGame();
            } else if (guessesLeft === 0) {
                losses++;
                document.getElementById('losses').innerHTML = losses;
                playGame();
            }
        }
    };
}
playGame();

/*
//variables to hold score count and write to HTML page
var wins = 0;
var losses = 0;

var guessesRemaining = 10;
//Empty array to store letters guessed
var lettersGuessed = [];
var oneLetter;
//Empty array for dashes
var word = [];

//When the enter key is pressed the game is reset
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        word = [];
        var lettersGuessed = [];
        var wrongLetters = [];
        start();
    }
}, false);

//function to start and re-start the game when needed
function start() {
    var guessesRemaining = 10;
    //Empty array to store letters guessed
    var lettersGuessed = [];
    var oneLetter;
    //Empty array for dashes
    var word = [];




    //Randomizer to pick a random letter from the letters array and set them to a randomLetter variable
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);

    //when the player presses a key well run some code
    document.onkeyup = function (event) {
        //To determine what key is pressed and save it to lettersGuessed
        var oneLetter = event.key;
        console.log(oneLetter);
        // oneLetter.push(event.key);
        lettersGuessed = oneLetter;
        console.log(oneLetter);
        console.log(lettersGuessed);

        if (lettersGuessed.indexOf(oneLetter) === -1){
            //subtract from guesses remaining and display new value
            guessesRemaining--;
            document.getElementById("guesses").innerHTML = guessesRemaining;
            console.log(guessesRemaining);

            lettersGuessed.push(oneLetter);
            //Print letters guessed to page
            document.getElementById("guessed-letters").innerHTML = lettersGuessed;
            console.log(lettersGuessed);


            if (randomLetter === oneLetter) {
                alert("Winner Winner. Chicken Dinner!");
                wins++;
                document.getElementById("wins").innerHTML = wins;

            } else if (guessesRemaining === 0) {
                alert(" You are looser HAHAHA! The letter was " + randomLetter + ".");
                losses++;
                document.getElementById("losses").innerHTML = losses;

            }
        }

    };

}
*/