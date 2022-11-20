
// Random Option genarated for computer;
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    return computerChoice;
}


// Logic of the game 
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "Player Wins!";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "Player Wins!";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "Player Wins!";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "Computer Wins!";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        return "Computer Wins!";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "Computer Wins!";
    }

    else {
        "Try again!";
    }
}


// Arranging the Round System
function game() {

    // Adding Variables to store Scores and function values
    let result;
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;

    for (let i = 0; i < 5; i++) {

        // Geting Players Choice and making it case sensativeless
        playerChoice = prompt("Choose between rock, paper, scissors");
        playerChoice = playerChoice.toLowerCase();

        // Storing computers choice in a variable
        let computerChoice = getComputerChoice();

        // Selecting the winner 
        result = playRound(playerChoice, computerChoice);

        // Genarating the Score
        if (result === "Player Wins!") {
            playerScore++;
        }

        else if (result === "Computer Wins!") {
            computerScore++;
        }

        else {
            null;
        }

        console.log(playerScore, computerScore);
    }


    // Evaluating the winner
    if (playerScore > computerScore) {
        return `Player Score is ${playerScore} and Computer Score is ${computerScore} so the winner is Player`;
    }

    else if (playerScore === computerScore){
        return `Player Score is ${playerScore} and Computer Score is ${computerScore} so the game is Draw!`;
    }

    else {
        return `Computer Score is ${computerScore} and Player Score is ${playerScore} so the winner is Computer`;
    }


}



console.log(game());