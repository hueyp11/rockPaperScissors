
let rockPaperScissors = ["Rock", "Paper", "Scissors"];
var playerWins = 0;
var computerWins = 0;

function getComputerChoice() {
    let choice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return choice
}

var playerSelection = document.querySelectorAll('button');
playerSelection.forEach((button) => {
button.addEventListener('click', (e) => {
    singleRoundOfRps(e.target.id);
});
});

function singleRoundOfRps(playerSelection, computerSelection) {

    var computerSelection = getComputerChoice();

    if (playerSelection == 'rock' && computerSelection == 'Rock') {                   
            return console.log("This round ends in a tie.");
        }   else if (playerSelection == 'rock' && computerSelection == 'Paper') {
            computerWins = computerWins + 1;
            return console.log("You lose! Paper beats rock.");
        }   else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
            playerWins = playerWins + 1;
            return console.log("You win! Rock beats scissors.");
        }   else if (playerSelection == 'paper' && computerSelection == 'Rock') {
            playerWins = playerWins + 1
            return console.log("You win! Paper beats rock.");
        }   else if (playerSelection == 'paper' && computerSelection == 'Paper') {
            return console.log("This round ends in a tie.");
        }   else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
            computerWins = computerWins + 1;
            return console.log("You lose! Scissors beats paper.");
        }   else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
            computerWins = computerWins + 1;
            return console.log("You lose! Rock beats scissors.");
        }   else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
            playerWins = playerWins + 1
            return console.log("You win! Scissors beats paper.");
        }   else (playerSelection == 'scissors' && computerSelection == 'Scissors'); {
            return console.log("This round ends in a tie.");
        }    
}


function game() {

    for (let i = 0; i < 5; i++) {

        singleRoundOfRps();
        console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
    }
}

function declareWinner() {
    if (playerWins > computerWins) {
        console.log("You win!");
    } else if (playerWins < computerWins) {
        console.log("You lose! Computer wins!");
    } else {
        console.log("Game ended in a tie!")
    }
}



