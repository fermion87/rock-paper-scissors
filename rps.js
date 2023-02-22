//init variables
let score = 0;
let comScore = 0;

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

function playRound(playerSelection) {
    result = "error"; //default result
    let computerSelection = getComputerChoice();

    if(playerSelection == computerSelection) {
        result = "Player: " + playerSelection + " | Computer: " + computerSelection + " | Draw. Player Score:" + score;
        return result;
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        score++;
        result = "Player: " + playerSelection + " | Computer: " + computerSelection + " | Player wins. Player Score:" + score;
        return result;
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        score++;
        result = "Player: " + playerSelection + " | Computer: " + computerSelection + " | Player wins. Player Score:" + score;
        return result;
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        score++;
        result = "Player: " + playerSelection + " | Computer: " + computerSelection + " | Player wins. Player Score:" + score;
        return result;
    } else {
        result = "Player: " + playerSelection + " | Computer: " + computerSelection + " | Computer wins. Player Score:" + score;
        return result;
    }
}

// function game() {
//     //prompt player for choice
//     let playerSelection = prompt("Rock, paper, or scissors?");

//     //determine computer selection
//     let computerSelection = getComputerChoice();

//     //determine winner
//     console.log("Player: " + playerSelection);
//     console.log("Computer: " + computerSelection);
//     console.log(playRound(playerSelection,computerSelection));
// }

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        div.textContent = playRound(button.id);
        if(score >= 5) {
            div.textContent = "The player wins this round.";
            div.setAttribute('style', 'font-weight: bold;');
        }

        //alert(button.id);
    });
});

// game();


