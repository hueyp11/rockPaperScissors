let rockPaperScissors = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    let choice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return choice
}

const playerSelection = rockPaperScissors.toString();
const computerSelection = getComputerChoice();

function singleRoundOfRps(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();


    if (playerSelection == 'rock' && computerSelection == 'Rock') {
        return console.log("This round ends in a tie.");
        }   else if (playerSelection == 'rock' && computerSelection == 'Paper') {
            return "You lose! Paper beats rock.";
        }   else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
            return "You win! Rock beats scissors.";
        }   else if (playerSelection == 'paper' && computerSelection == 'Rock') {
            return "You win! Paper beats rock.";
        }   else if (playerSelection == 'paper' && computerSelection == 'Paper') {
            return "This round ends in a tie.";
        }   else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
            return "You lose! Scissors beats paper.";
        }   else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
            return "You lose! Rock beats scissors.";
        }   else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
            return "You win! Scissors beats paper.";
        }   else (playerSelection == 'scissors' && computerSelection == 'Scissors'); {
            return "This round ends in a tie.";
        }
    
}

console.log(singleRoundOfRps('PaPer', getComputerChoice()));