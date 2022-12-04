const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    cpmpurt: 0
}



// event listner

choices.forEach(choice => {
    choice.addEventListener('click', function(e){
        restart.style.display = "inline-block";
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();

        const winner = getWinner(playerChoice, computerChoice)
        console.log(playerChoice, computerChoice, winner)
    })
});

// computerChoice

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr [Math.floor(Math.random()*arr.length)];
}

// winner selection

function getWinner(p, c){
    if(p === c){
        return "Draw";
    }
    else if (p === "rock"){
        if(c === "paper"){
            return "Computer";
        }else{
            return "Player";
        }
    }

    else if (p === "paper"){
        if(c === "scissors"){
            return "Computer";
        }else{
            return "Player";
        }
    }

    else if (p === "scissors"){
        if (c === "rock"){
            return "Computer";
        }else{
            return "Player";
        }
    }

    else{
        return "Try again";
    }
}

