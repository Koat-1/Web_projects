function getComputerChoice(min, max) {  
    return Math.floor(Math.random() * 3)+1;
}

function getHumanChoice(choice) {
    return prompt("make your choice ").toUpperCase();
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "ROCK") {
            switch (computerChoice) {
                case 1: console.log("Draw"); break;
                case 2: console.log("You Lose"); computerScore++; break;
                case 3: console.log("You win"); humanScore++; break;
            }
        }
        else if (humanChoice === "PAPER") {
            switch (computerChoice) {
                case 1: console.log("You win"); humanScore++; break;
                case 2: console.log("You Draw"); break;
                case 3: console.log("You Lose"); computerScore++; break;
            }
        }
        else if (humanChoice === "SCISSORS") {
            switch (computerChoice) {
                case 1: console.log("You lose"); computerScore++; break;
                case 2: console.log("You Win"); humanScore++; break;
                case 3: console.log("Draw"); break;
            }
        }
    }

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log("Human scores: " + humanScore);
        console.log("Computer score: " + computerScore); 
        console.log("-----------------------");
    }
}

playGame();
