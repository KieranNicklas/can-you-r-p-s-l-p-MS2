/* Variables to keep track of the game */
let playerScore = 0;
let computerScore = 0;
let totalMoves = 20;
let currentMove = 0;

const userChoices = document.getElementById ('user-choices');
const result = document.getElementById ('result');
const rules = document.getElementById ('rules');
const gameboard = document.getElementById ('gameboard-container');
const userOptions = document.getElementById ('user-options')
const rockButton = document.getElementById ('rockBtn');
const paperButton = document.getElementById ('paperBtn');
const scissorsButton = document.getElementById ('scissorsBtn');
const lizardButton = document.getElementById ('lizardBtn');
const spockButton = document.getElementById ('spockBtn');


/* Function to begin game and remove rules */
function startGame() {
    if (currentMove === totalMoves) {
        gameboard.classList.add ('hide');
        userOptions.classList.add ('hide');
        result.classList.remove ('hide');
        overallWinner();
    }
    rules.classList.add ('hide');
    userChoices.classList.remove ('hide');
}

/* Function to determine winner of each round */


/* Function to increment User's score */

/* Function increment Computer's score */

/*Function to determine overall winner */

/* Function to restart game */

function restart() {
    playerScore = 0;
    computerScore = 0;
    totalMoves = 20;
    currentMove = 0;
    
}