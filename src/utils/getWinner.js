const map = {
    "rock" : "scissors",
     "paper" : "rock",
     "scissors" : "paper"
}

export const getWinner = (playerChoice,computerChoice) => {
    let choice = map[computerChoice];
    
    if(computerChoice === playerChoice){
        return "Draw"
    }else if(playerChoice === choice){
        return "Computer"
    }else{
        return "You"
    }
}