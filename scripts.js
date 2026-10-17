function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}

function getHumanChoice(){
    return prompt("Enter your choice: ");
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice){
    const humanChoiceStr = humanChoice.toLowerCase();
    const computerChoiceStr = computerChoice.toLowerCase();
    if(humanChoiceStr === 'rock' && computerChoiceStr === 'paper' || humanChoiceStr === 'paper' && computerChoiceStr === 'scissors' || humanChoiceStr === 'scissors' && computerChoiceStr === 'rock'){
        console.log(`DEFEAT: ${computerChoiceStr} beats ${humanChoiceStr}!`);
        computerScore++;
    } else if(humanChoiceStr === computerChoiceStr) {
        console.log('DRAW: it\'s a tie!');
    } else {
        console.log(`VICTORY: ${humanChoiceStr} beats ${computerChoiceStr}!`);
        humanScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if(computerScore > humanScore){
        console.log("Computer wins!");
    } else if(humanScore > computerScore){
        console.log("You win!");
    } else {
        console.log("No winner!");
    }
}

playGame();

