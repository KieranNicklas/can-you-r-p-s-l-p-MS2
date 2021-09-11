/* Variables to keep track of the game */
let playerScore = 0;
let computerScore = 0;
let totalMoves = 21;
let currentMove = 0;

const buttons = document.getElementsByTagName ('button');
const playersScore = document.getElementById ('player-score');
const computersScore = document.getElementById ('computer-score');
const playerImage = document.getElementById ('player-image');
const computerImage = document.getElementById ('computer-image');
const resultMessage = document.getElementById ('result-message');
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const numberOfMoves = document.getElementById ('number-of-moves');
const userChoices = document.getElementById ('user-choices');
const result = document.getElementById ('result');
const rules = document.getElementById ('rules');
const gameboard = document.getElementById ('gameboard-container');

/* Adds an event listener for the User buttons */
for (let button of buttons){
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        startGame(playerChoice);
    })
}

/* Function to begin game and remove rules */
function startGame(playerChoice) {
    if (currentMove === totalMoves) {
        gameboard.classList.add ('hide');
        result.classList.remove ('hide');
    }
    rules.classList.add ('hide');
    userChoices.classList.remove ('hide');
    numberOfMoves.innerText = `
    Move ${currentMove} of ${totalMoves}`;
    playersScore.innerText = `
    Your Score = ${playerScore}`;
    computersScore.innerText = `
    Computer's Score = ${computerScore}`;
    currentMove++;

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * choices.length);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkScore(playerChoice, computerChoice);
}

/* Function to determine winner of each round */
function checkScore(playerChoice, computerChoice) {
    if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
    } else {
        computerScore++;
    }
}

/*Function to determine overall winner */
function winner(playerScore, computerScore) {
    result.classList.remove ('hide');
    gameboard.classList.add ('hide');
    if (playerScore > computerScore) {
        resultMessage.innerText = "Congratulations, you win!";
    } else {
        resultMessage.innerText = "A loss today, but maybe victory tomorrow?";
    }
}
/* Function to restart game */

function restart() {
    if (gameboard.classList.contains = ('hide')) {
        gameboard.classList.remove('hide');
        result.classList.add ('hide');
    }
    playerScore = 0;
    computerScore = 0;
    totalMoves = 21;
    currentMove = 0;
}

function returnHome() {
    location.reload();
}