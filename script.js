const gameOn = function () {

    let keepPlaying = true;
    let options = ['R', 'P', 'S'];
    statObjects = {
        winsAndLosses: {
            wins: 0,
            losses: 0,
            ties: 0
        },
        gameRound: 0,
        chosenChoices: {
            rock: 0,
            paper: 0,
            scissors: 0
        }
    };

while (keepPlaying) {
    let userChoice = prompt("Enter R, P, or S to play!");
    
    if (!userChoice) {
        return;
    }
    userChoice = userChoice.toUpperCase();
    if (!options.includes(userChoice)) {
        window.alert("Please enter a valid choice");
    }
    else 
    {
        if (userChoice === 'R') {
        statObjects.chosenChoices.rock++;
         }
        else if (userChoice === 'S') {
        statObjects.chosenChoices.scissors++;
         }
        else {
        statObjects.chosenChoices.paper++;
         }
    
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    window.alert(`The computer chose ${computerChoice}`);

        if (userChoice === computerChoice){
        window.alert ("It's a tie!");}
        else if ((userChoice === 'R' && computerChoice === 'S') || 
                (userChoice === 'S' && computerChoice === 'P') || 
                (userChoice === 'P' && computerChoice === 'R')) {
            window.alert("You win!");
            statObjects.winsAndLosses.wins++;
        }
        else {
            window.alert("You lose!");
            statObjects.winsAndLosses.losses++; 
        }
        statObjects.gameRound++;
        keepPlaying = confirm("Do you want to keep playing?");
    }
} 
window.alert(`You have ${statObjects.winsAndLosses.wins} wins, ${statObjects.winsAndLosses.losses} losses, and ${statObjects.winsAndLosses.ties} ties. You chose rock ${statObjects.chosenChoices.rock} times, paper ${statObjects.chosenChoices.paper} times, and scissors ${statObjects.chosenChoices.scissors} times. You played ${statObjects.gameRound} rounds.`);
}

gameOn();