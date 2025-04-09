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

  //Random computer choice
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  //Determine winner
  function determineWinner(player, computer) {
    if (player === computer) {
      return 'draw';
    }
  
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }
  
  //Update Scores
  function updateScores(winner) {
    if (winner === 'player') {
      playerScore++;//increase the player score
      playerScoreText.textContent = playerScore;//updates score from the webpage
    } else if (winner === 'computer') {
      computerScore++;//increase the computer score
      computerScoreText.textContent = computerScore;//updates score from the webpage
    }
  }

  //Show or display the result
  function displayResult(player, computer, winner) {
    if (winner === 'draw') {
      resultText.textContent = `It's a draw! You both chose ${player}`;
    } else if (winner === 'player') {
      resultText.textContent = `You win! ${player} beats ${computer}`;
    } else {
      resultText.textContent = `You lose! ${computer} beats ${player}`;
    }
  }

  //Reset game
  resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = '0';
    computerScoreText.textContent = '0';
    resultText.textContent = '';//sets the result message to empty
  });

  