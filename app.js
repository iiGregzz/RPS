
// ADVANCED RPS

// I need a function that gathers the user's moves into a variable.

const collectUserMoveIntoVariable = () => {
    const userChoice = prompt("Choose your weapon! R, P or S:");
    return userChoice;
}
alert("You chose " + collectUserMoveIntoVariable())

// I need a function that randomly generates a computer move

const createAndCollectAiMove = () => {
    let aiChoice = (Math.floor(Math.random() * 3));
    if (aiChoice <= 1) {
        return "R";
    } else if (aiChoice <= 2) {
        return "P";
    } else {
        return "S";
    }
}
alert("AI chose " + createAndCollectAiMove());

// I need a function that compares the two moves to see who has won the round

const compareAiAndUserScoresToDetermineWhoWins = (userChoice, aiChoice) => {
    if (userChoice === aiChoice) {
        return "It's a draw!";
    } else if (userChoice === "R") {
        if (aiChoice === "P") {
            return "AI Wins!";
        } else {
            return "Player wins!";
        }
        } if (userChoice === "S") {
            if (computerChoice === "R") {
            return "AI wins!";
        } else {
            return "Player wins!";
        } 
        } if (userChoice === "P") {
            if (computerChoice === "S") {
            return "AI wins!";
        } else {
            return "Player wins!";
        }
    }
}
alert(compareAiAndUserScoresToDetermineWhoWins())