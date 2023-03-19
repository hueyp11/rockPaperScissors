let rockPaperScissors = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    let choice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return choice
}

function singleRoundOfRps(playerSelection, computerSelection) {
    var playerSelection = (rockPaperScissors.toString()).toLowerCase();
    var computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        console.log("This round ends in a tie.");
        }   else if (playerSelection === 'rock' && computerSelection === 'Paper') {
            console.log("You lose! Paper beats rock.");
        }   else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
            console.log("You win! Rock beats scissors.");
        }   else if (playerSelection === 'paper' && computerSelection === 'Rock') {
            console.log("You win! Paper beats rock.")
        }   else if (playerSelection === 'paper' && computerSelection === 'Paper') {
            console.log("This round ends in a tie.");
        }   else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
            console.log("You lose! Scissors beats paper.");
        }   else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
            console.log("You lose! Rock beats scissors.");
        }   else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
            console.log("You win! Scissors beats paper.");
        }   else (playerSelection === 'scissors' && computerSelection === 'Scissors'); {
            console.log("This round ends in a tie.");
        }
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(singleRoundOfRps(playerSelection, computerSelection));