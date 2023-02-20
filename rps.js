//functions
function getComputerChoice() {   
    //generate random number
    let choice = Math.floor(Math.random() *3)
    let hand = "pirate hook (error)";
    //switch case
    switch(choice) {
        case 0: //rock
          hand = "rock";
          break;
        case 1: //paper
          hand = "paper";
          break;
        case 2: //scissors
          hand = "scissors";
          break;
        default: //pirate hook
          hand = "pirate hook (error)";
          break;
      }
    return hand;
}

function playRound(playerSelection, computerSelection) {
    result = "error"; //default result
    if(playerSelection == computerSelection) {
        result = "Draw.";
        return result;
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        result = "Player wins.";
        return result;
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        result = "Player wins.";
        return result;
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        result = "Player wins.";
        return result;
    } else {
        result = "Computer wins.";
        return result;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        //prompt player for choice
        let playerSelection = prompt("Rock, paper, or scissors?");

        //determine computer selection
        let computerSelection = getComputerChoice();

        //determine winner
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
     }
}

game();


