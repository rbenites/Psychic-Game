
function hold() {
    var wins = 0;
    document.getElementById('wins').innerHTML = wins;
    var losses = 0;
    document.getElementById('losses').innerHTML = losses;
    // var playerGuess;
    // var playerGuesses = [];
    var guessesLeft = 15;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;


    //This will hold an array of letters (the Alphabet)
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


/*
    //this Jquery alerts when the radial buttons are changed
    $('#difficultySelector input').on('change', function () {
        alert($('input[name=inlineRadioOptions]:checked', '#difficultySelector').val());
    });
console.log(difficultySelector);

 /* trying to figure out how to use JS to get the easy/medium/hard values and pass them to a var that will be used in the playGame function
    function difficultyFunction(difficulty){
        var easy = document.getElementById("easy");
        var medium = document.getElementById("medium");
        var hard = document.getElementById("hard");
        playGame(this.difficultyFunction("difficulty"));   
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
        console.log(level);
        */

        //Randomizer for computer to pick a letter
        var computerpick = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerpick);

        var playerGuesses = [];
        document.getElementById('guessed-letters').innerHTML = playerGuesses;

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
                    usersGuessedLetter = [];
                    document.getElementById('guessed-letters').innerHTML = playerGuesses;
                    alert("You are winner HAHAHA");
                    playerGuesses = [];
                    guessesLeft = 15;
                    document.getElementById('guessesLeft').innerHTML = guessesLeft;
                    playGame();
                } else if (guessesLeft === 0) {
                    losses++;
                    document.getElementById('losses').innerHTML = losses;
                    alert("You lose! Your soul is mine");
                    usersGuessedLetter = [];
                    document.getElementById('guessed-letters').innerHTML = playerGuesses;
                    playerGuesses = [];
                    guessesLeft = 15;
                    document.getElementById('guessesLeft').innerHTML = guessesLeft;
                    playGame();
                }
            }
        };
    }
    playGame();
}
/*

//When the enter key is pressed the game is reset
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        word = [];
        var lettersGuessed = [];
        var wrongLetters = [];
        start();
    }
}, false);
 
*/