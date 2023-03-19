let rockPaperScissors = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    let choice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return choice
}



function singleRoundOfRps(playerSelection, computerSelection) {
    
    var playerSelection = prompt("Enter your choice of Rock, Paper, or Scissors!")
    playerSelection = playerSelection.toLowerCase();
    var computerSelection = getComputerChoice();


    if (playerSelection == 'rock' && computerSelection == 'Rock') {
            return "This round ends in a tie.";
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

//console.log(singleRoundOfRps());


//function game() {
//    for (let i = 0; i < 5; i++) {
//        singleRoundOfRps();
//        return singleRoundOfRps();
//    }
//}

//game();