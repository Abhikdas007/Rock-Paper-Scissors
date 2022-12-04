
// geting the buttons value
const buttons = document.querySelectorAll(".button");
const scoreScreen = document.querySelector("#result");
const plyerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
console.log(buttons);
const score = {
    player: 0,
    computer: 0
}

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const player = e.target.id;
        const computer = getComputerChoice();
        for (let i = 0; i < 5; i++) {
            console.log(player, computer, playRound(player, computer));
           
        }
        game1(playRound(player, computer))
    })
});



// Random Option genarated for computer;
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    return computerChoice;
}




// Logic of the game 
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    }

    else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer";
        } else {
            return "Player";
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer";
        } else {
            return "Player";
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer";
        } else {
            return "Player";
        }
    }

    else {
        return "Try Again";
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

    else if (playerScore === computerScore) {
        return `Player Score is ${playerScore} and Computer Score is ${computerScore} so the game is Draw!`;
    }

    else {
        return `Computer Score is ${computerScore} and Player Score is ${playerScore} so the winner is Computer`;
    }


}

function game1(playRound) {

    if (playRound === "Player") {
        score.player++;
        plyerScore.innerHTML = `<p>Player:${score.player}</p>`;
        scoreScreen.textContent = "Player Won";

    }

    else if (playRound === "Computer") {
        score.computer++;
        computerScore.innerHTML = `<p>Computer:${score.computer}</p>`;
        scoreScreen.textContent = "Computer Won";
    }

    else {
        scoreScreen.textContent = "Draw";
    }



}







