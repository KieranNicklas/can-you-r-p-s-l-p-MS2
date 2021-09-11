/* Variables to keep track of the game */
let playerScore = 0;
let computerScore = 0;
let totalMoves = 21;
let currentMove = -1;

const numberOfMoves = document.getElementById ('number-of-moves');
const playersScore = document.getElementById ('player-score');
const computersScore = document.getElementById ('computer-score');
const userChoices = document.getElementById ('user-choices');
const result = document.getElementById ('result');
const resultMessage = document.getElementById ('result-message');
const rules = document.getElementById ('rules');
const gameboard = document.getElementById ('gameboard-container');
const userOptions = document.getElementById ('user-options')
const rockButton = document.getElementById ('rockBtn');
const paperButton = document.getElementById ('paperBtn');
const scissorsButton = document.getElementById ('scissorsBtn');
const lizardButton = document.getElementById ('lizardBtn');
const spockButton = document.getElementById ('spockBtn');
const choices = ["Rock, Paper, Scissors, Lizard, Spock"];
const buttons = document.getElementsByTagName ('button');

/* Adds an event listener for the User buttons */
for (let button of buttons){
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute("data-choice");
        startGame(playerChoice);
    })
}

/* Function to begin game and remove rules */
function startGame() {
    if (currentMove === totalMoves) {
        gameboard.classList.add ('hide');
        userOptions.classList.add ('hide');
        result.classList.remove ('hide');
        winner(playerScore, computerScore);
    }
    rules.classList.add ('hide');
    userChoices.classList.remove ('hide');
    computerScore = 0;
    playerScore = 0;
    currentMove++;
    numberOfMoves.innerText = `
    Move ${currentMove} of ${totalMoves}`;
    playersScore.innerText = `
    Your Score = ${playerScore}`;
    computersScore.innerText = `
    Computers Score = ${computerScore}`;

    const computerChoiceNumber = Math.floor(Math.random()*5);
    const computerChoice = choices[computerChoiceNumber];
}

/* Function to determine winner of each round */
if (playerChoice === computerChoice) {
    let playersChoice = document.getElementById ('players-choice');
    playersChoice.innerText = "Tie!"
    let computersChoice = document.getElementById ('computers-choice');
    computersChoice.innerText = "Tie!"
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Lizard" || computerChoice === "Scissors") {
            playerScore++;
        } else {
            computerScore++;
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper" || computerChoice === "Lizard") {
            playerScore++;
        } else {
            computerScore++;
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock" || computerChoice === "Spock") {
            playerScore++;
        } else {
            computerScore++;
        }
    } else if (playerChoice === "Lizard") {
        if (computerChoice === "Spock" || computerChoice === "Paper") {
            playerScore++;
        } else {
            computerScore++;
        }
    } else if (playerChoice === "Spock") {
        if (computerChoice === "Scissors" || computerChoice === "Rock") {
            playerScore++;
        } else {
            computerScore++;
        }
    }

/*Function to determine overall winner */
function winner (playerScore, computerScore) {
    result.classList.remove ('hide');
    gameboard.classList.add ('hide');
    if (playerScore < computerScore) {
        resultMessage.innerText = "Congratulations, you win!"
    } else if (playerScore > computerScore) {
        resultMessage.innerText = "A loss today, but maybe victory tomorrow?"
    }
}
/* Function to restart game */

function restart() {
    playerScore = 0;
    computerScore = 0;
    totalMoves = 21;
    currentMove = 0;
}