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
const footer = document.getElementById ('footer');
const contactUs = document.getElementById ('contact-us');
const scoresContainer = document.getElementById ('scores-container');
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
        resultMessage.innerText = "It's a Tie";
    } else if (playerChoice === "0" && (computerChoice === 2 || computerChoice === 3)) {
        playerScore++;
        resultMessage.innerText = "Player Wins";
    } else if (playerChoice === "1" && (computerChoice === 0 || computerChoice === 4)) {
        playerScore++;
        resultMessage.innerText = "Player Wins";
    } else if (playerChoice === "2" && (computerChoice === 1 || computerChoice === 3)) {
        playerScore++;
        resultMessage.innerText = "Player Wins";
    } else if (playerChoice === "3" && (computerChoice === 1 || computerChoice === 4)) {
        playerScore++;
        resultMessage.innerText = "Player Wins";
    } else if (playerChoice === "4" && (computerChoice === 2 || computerChoice === 0)) {
        playerScore++;
        resultMessage.innerText = "Player Wins";
    } else {
        computerScore++;
        resultMessage.innerText = "Computer Wins";
    }   

}
/* Function to restart game */
function restart() {
    location.reload();
}

/* Contact Us */
function getInTouch(){
    gameboard.classList.add ('hide');
    footer.classList.add ('hide');
    scoresContainer.classList.add ('hide');
    contactUs.classList.remove ('hide');
}