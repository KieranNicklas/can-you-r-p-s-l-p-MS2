let playerScore = 0;
let computerScore = 0;

const buttons = document.getElementsByTagName ('button');
const playersScore = document.getElementById ('player-score');
const computersScore = document.getElementById ('computer-score');
const playerImage = document.getElementById ('player-image');
const computerImage = document.getElementById ('computer-image');
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const userChoices = document.getElementById ('user-choices');
const resultMessage = document.getElementById ('result-message');
const gameboard = document.getElementById ('gameboard-container');
let roundScore = document.getElementById ('round-score');
let result;

/* Adds an event listener for the User buttons */
for (let button of buttons){
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        startGame(playerChoice);
    });
}

/* Function to begin game and remove rules */
function startGame(playerChoice) {
    resultMessage.classList.add ('hide');
    playersScore.innerText = `
    Your Score = ${playerScore}`;
    computersScore.innerText = `
    Computer's Score = ${computerScore}`;

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkScore(playerChoice, computerChoice);    
}

/* Function to determine winner of each round */
function checkScore(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        result = "It's a Tie";
    } else if (playerChoice === "0" && (computerChoice === 2 || computerChoice === 3)) {
        playerScore++;
        result = "Player Wins";
    } else if (playerChoice === "1" && (computerChoice === 0 || computerChoice === 4)) {
        playerScore++;
        result = "Player Wins";
    } else if (playerChoice === "2" && (computerChoice === 1 || computerChoice === 3)) {
        playerScore++;
        result = "Player Wins";
    } else if (playerChoice === "3" && (computerChoice === 1 || computerChoice === 4)) {
        playerScore++;
        result = "Player Wins";
    } else if (playerChoice === "4" && (computerChoice === 2 || computerChoice === 0)) {
        playerScore++;
        result = "Player Wins";
    } else {
        computerScore++;
        result = "Computer Wins";
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
    location.reload();
}