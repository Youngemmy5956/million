const readline = require('readline');
const random = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
const maxTurns = 10; // Set the maximum number of turns

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let turns = 0;

console.log('Welcome to the Number Guessing Game!');

function guessNumber() {
  rl.question('Enter your guess: ', (input) => {
    const userGuess = parseInt(input);

    if (isNaN(userGuess)) {
      console.log('Please enter a valid number.');
      guessNumber();
      return;
    }

    turns++;

    if (userGuess < random) {
      console.log('Try a higher number.');
    } else if (userGuess > random) {
      console.log('Try a lower number.');
    } else {
      console.log(`Congratulations! You guessed the correct number (${random}) in ${turns} turns.`);
      rl.close();
      return;
    }

    if (turns >= maxTurns) {
      console.log(`Sorry, you've reached the maximum number of turns. The correct number was ${random}.`);
      rl.close();
      return;
    }

    guessNumber();
  });
}

guessNumber();
