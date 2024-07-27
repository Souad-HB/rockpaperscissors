let keepPlaying = true;
let gameRound = 0;
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

    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        console.log("Invalid choice. Please try again.");


        while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            userChoice = window.prompt("Invalid choice. Please try again. Enter either rock, paper or scissors");
        }
        console.log("Invalid choice. Please try again.");}

    if (userChoice == "rock") {
        statObjects.rock += 1;
    }
    if (userChoice == "paper") {
        statObjects.paper += 1;
    }
    if (userChoice == "scissors") {
        statObjects.scissors += 1;
    }

    //logging user choice
    console.log(`Your choice was ${userChoice}`); 
    //logging computer choice
    let computerChoice = options[Math.floor(Math.random() * options.length)]; 
    //comparing both results
    console.log(`The computer chose ${computerChoice}`);
    if ((userChoice == "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        resultObjects.win += 1;
        console.log("You win!");
    }
    else if (userChoice == computerChoice) {
        resultObjects.draw += 1;
        console.log("It's a draw!");
    }
    else {
        resultObjects.lose += 1;
        console.log("You lose!");
    }
    
return;
}

while (keepPlaying) {
    gameOn ();
    gameRound += 1;
    keepPlaying = window.confirm("Do you want to play again?");
}
console.log(`Your selections were as follows: Rock: ${statObjects.rock}, Paper: ${statObjects.paper}, Scissors: ${statObjects.scissors}`);
console.log(`The results are as follows: Wins: ${resultObjects.win}, Losses: ${resultObjects.lose}, Draws: ${resultObjects.draw}`);
console.log(`You played ${gameRound} round(s).`);