
let rockPaperScissors = ["Rock", "Paper", "Scissors"];
var playerWins = 0;
var computerWins = 0;
var playerSelection = document.querySelectorAll('button');
playerSelection.forEach((button) => {
button.addEventListener('click', (e) => {
    singleRoundOfRps(e.target.id);
});
});

function getComputerChoice() {
    let choice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return choice
}

function singleRoundOfRps(playerSelection, computerSelection) {

    var computerSelection = getComputerChoice();

    function declareWinner() {
    if (playerWins === 5) {
        return document.getElementById('results').innerHTML = `Player: ${playerWins} Computer: ${computerWins} <br /> You win!`;
    } else if (computerWins == 5) {
        return document.getElementById('results').innerHTML = `Player: ${playerWins} Computer: ${computerWins} <br /> You lose! Computer wins!`; 
    }
    }

    if (playerSelection == 'rock' && computerSelection == 'Rock') { 
            document.getElementById('results').innerHTML = `This round ends in a tie. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner();
        }   else if (playerSelection == 'rock' && computerSelection == 'Paper') {
            computerWins = computerWins + 1;
            document.getElementById('results').innerHTML = `You lose this round! Paper beats rock. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
            playerWins = playerWins + 1;
            document.getElementById('results').innerHTML = `You win this round! Rock beats scissors. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else if (playerSelection == 'paper' && computerSelection == 'Rock') {
            playerWins = playerWins + 1
            document.getElementById('results').innerHTML = `You win this round! Paper beats rock. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else if (playerSelection == 'paper' && computerSelection == 'Paper') {
            document.getElementById('results').innerHTML = `This round ends in a tie. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
            computerWins = computerWins + 1;
            document.getElementById('results').innerHTML = `You lose this round! Scissors beats paper. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
            computerWins = computerWins + 1;
            document.getElementById('results').innerHTML = `You lose this round! Rock beats scissors. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
            playerWins = playerWins + 1
            document.getElementById('results').innerHTML = `You win this round! Scissors beats paper. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }   else (playerSelection == 'scissors' && computerSelection == 'Scissors'); {
            document.getElementById('results').innerHTML = `This round ends in a tie. <br /> Player: ${playerWins} Computer: ${computerWins}`;                 
            return declareWinner()
        }
          
}




