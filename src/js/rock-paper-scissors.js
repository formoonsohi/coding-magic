const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const gameMessageText = document.getElementById('game-message-text');
const rockChoice = document.getElementById('rock-choice');
const scissorsChoice = document.getElementById('scissors-choice');
const paperChoice = document.getElementById('paper-choice');
const resetButton = document.getElementById('reset-button');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateUI() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function displayMessage(message, isWin = false, isLoss = false) {
    gameMessageText.textContent = message;
    gameMessageText.classList.remove('win-message', 'loss-message');
    if (isWin) {
        gameMessageText.classList.add('win-message');
    } else if (isLoss) {
        gameMessageText.classList.add('loss-message');
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    let message = '';
    let isWin = false;
    let isLoss = false;

    const playerChoiceUk = {
        'rock': 'Камінь',
        'paper': 'Папір',
        'scissors': 'Ножиці'
    }[playerChoice];

    const computerChoiceUk = {
        'rock': 'Камінь',
        'paper': 'Папір',
        'scissors': 'Ножиці'
    }[computerChoice];


    if (winner === 'player') {
        playerScore++;
        message = `Ви виграли раунд! Ви обрали ${playerChoiceUk}, комп'ютер обрав ${computerChoiceUk}.`;
        isWin = true;
    } else if (winner === 'computer') {
        computerScore++;
        message = `Ви програли раунд! Ви обрали ${playerChoiceUk}, комп'ютер обрав ${computerChoiceUk}.`;
        isLoss = true;
    } else {
        message = `Нічия! Ви обидва обрали ${playerChoiceUk}.`;
    }

    updateUI();
    displayMessage(message, isWin, isLoss);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateUI();
    displayMessage('Оберіть варіант для початку гри!');
    gameMessageText.classList.remove('win-message', 'loss-message');
}

rockChoice.addEventListener('click', () => playRound('rock'));
scissorsChoice.addEventListener('click', () => playRound('scissors'));
paperChoice.addEventListener('click', () => playRound('paper'));

resetButton.addEventListener('click', resetGame);

updateUI();
displayMessage('Оберіть варіант для початку гри!');