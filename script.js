// Scores
let playerScore = 0;
let computerScore = 0;

// HTML elements
const resultText = document.getElementById('result');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const choices = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset');

// Game options
const options = ['rock', 'paper', 'scissors'];

//Event listeners for each choice
choices.forEach(choice => {
    choice.addEventListener('click', () => {
      const playerChoice = choice.getAttribute('data-choice');
      const computerChoice = getComputerChoice();
      const winner = determineWinner(playerChoice, computerChoice);
      updateScores(winner);
      displayResult(playerChoice, computerChoice, winner);
    });
  });