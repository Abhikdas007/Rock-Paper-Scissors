const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    computer: 0
}



// event listner

choices.forEach(choice => {
    choice.addEventListener('click', function(e){
        restart.style.display = "inline-block";
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();

        const winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice);
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

function showWinner (winner, computerChoice){
    if (winner === "Player"){
        scoreboard.player++;
        //show modal result

        result.innerHTML = `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    } 
    else if (winner === "Computer"){
        scoreboard.computer++;

        result.innerHTML = `<h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    }

    else{
        result.innerHTML = `<h1>It is a Drwa</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    }
    // show score

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = "block"
}
