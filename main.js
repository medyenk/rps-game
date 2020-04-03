$(document).ready(function(){

    $( "#rock" ).click(function() {
        compareResults("rock");
    });

    $( "#paper" ).click(function() {
        compareResults("paper");
    });

    $( "#scissors" ).click(function() {
        compareResults("scissors");
    });

  });



computerSelection = () => {
    let computerPick;
    var ranInt = Math.floor(Math.random() * Math.floor(3));
    if (ranInt === 0) { 
        computerPick = "rock";
    } else if (ranInt === 1) {
        computerPick = "paper";
    } else {
        computerPick = "scissors";
    }
    return computerPick; 
}

compareResults = (pick) => {
    if (computerSelection() === pick) {
        console.log("It's a draw!")
    } else if (computerSelection() === "rock" && pick === "scissors" || 
               computerSelection() === "paper" && pick === "rock" ||
               computerSelection() === "scissors" && pick === "paper") {
        console.log("The computer wins! :(")
    } else {
        console.log("You win!")
    }
}
