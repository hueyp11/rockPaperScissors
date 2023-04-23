
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

    function declareWinner() {
    if (playerWins === 5) {
        return console.log("You win!");
    } else if (computerWins == 5) {
        return console.log("You lose! Computer wins!"); 
    }
    }

    if (playerSelection == 'rock' && computerSelection == 'Rock') { 
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);                 
            console.log("This round ends in a tie.");
            return declareWinner()
        }   else if (playerSelection == 'rock' && computerSelection == 'Paper') {
            computerWins = computerWins + 1;
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("You lose! Paper beats rock.");
            return declareWinner()
        }   else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
            playerWins = playerWins + 1;
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("You win! Rock beats scissors.");
            return declareWinner()
        }   else if (playerSelection == 'paper' && computerSelection == 'Rock') {
            playerWins = playerWins + 1
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("You win! Paper beats rock.");
            return declareWinner()
        }   else if (playerSelection == 'paper' && computerSelection == 'Paper') {
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("This round ends in a tie.");
            return declareWinner()
        }   else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
            computerWins = computerWins + 1;
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("You lose! Scissors beats paper.");
            return declareWinner()
        }   else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
            computerWins = computerWins + 1;
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("You lose! Rock beats scissors.");
            return declareWinner()
        }   else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
            playerWins = playerWins + 1
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("You win! Scissors beats paper.");
            return declareWinner()
        }   else (playerSelection == 'scissors' && computerSelection == 'Scissors'); {
            console.log("Player: " + playerWins + " " + "Computer: " + computerWins);
            console.log("This round ends in a tie.");
            return declareWinner()
        }
          
}




