/*
Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. 
Every time you create a new game, it should select a new random number, and keep it secret from the player.
*/
function guessingGame() {

    let valToGuess = Math.floor(Math.random() * 100); 
    let numGuesses = 0;
    let isOver = false;

    return function game(num) {
        if (isOver) return 'The game is over, you already won!';

        numGuesses++;

        if( num === valToGuess){
            isOver = true;
            return `You win! You found ${num} in ${numGuesses} guesses.`;
        }
        
        if (num < valToGuess) return `${num} is too low!`;
        if (num > valToGuess) return `${num} is too high!`;

    }
}

module.exports = { guessingGame };

/*
let game = guessingGame();
console.log(game(50)); // "50 is too low!"
console.log(game(90)); // "90 is too high!"
console.log(game(70)); // "You win! You found 70 in 3 guesses."
console.log(game(70)); // "The game is over, you already won!"
*/