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
    })
});
