function getComputerChoice() {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let choice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return choice
}

console.log(getComputerChoice());
