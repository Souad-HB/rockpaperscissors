let keepPlaying = true;

statObjects = {
    rock: 0,
    paper: 0,
    scissors: 0
};
resultObjects = {
    win: 0,
    lose: 0,
    draw: 0
};

const gameOn = function() {
    
    let options = ["rock", "paper", "scissors"];
    
    let userChoice = window.prompt("Enter either rock, paper or scissors"); 
    if (!userChoice) {
        return;
      }
    // if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    //     window.alert("Invalid choice. Please try again.");


    //     while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    //         userChoice = window.prompt("Invalid choice. Please try again. Enter either rock, paper or scissors");
    //     }
    //     window.alert("Invalid choice. Please try again.");}

    if (userChoice == "rock") {
        statObjects.rock += 1;
    }
    else if (userChoice == "paper") {
        statObjects.paper += 1;
    }
    else if (userChoice == "scissors") {
        statObjects.scissors += 1;
    }
    else
    { window.alert("Invalid choice. Please try again.");

    }


    //logging computer choice
    let computerChoice = options[Math.floor(Math.random() * options.length)]; 
    //comparing both results
    window.alert(`The computer chose ${computerChoice}`);
    if ((userChoice == "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        resultObjects.win++;
        window.alert("You win!");
    }
    else if (userChoice == computerChoice) {
        resultObjects.draw++ ;
        window.alert("It's a draw!");
    }
    else {
        resultObjects.lose += 1;
        window.alert("You lose!");
    }
    
return;
}
let gameRound = 0;
const letsPlay = function() {
    while (keepPlaying) {
        gameOn ();
        gameRound += 1;
        keepPlaying = window.confirm("Do you want to play again?");
    }
    return;
};

letsPlay();
window.alert(`Rock: ${statObjects.rock}, Paper: ${statObjects.paper}, Scissors: ${statObjects.scissors},
Wins: ${resultObjects.win}, Losses: ${resultObjects.lose}, Draws: ${resultObjects.draw},
You played ${gameRound} round(s).`);