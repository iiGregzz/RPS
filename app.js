
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
alert("AI chose " + createAndCollectAiMove())

// I need a function that compares the two moves to see who has won the round

const compareAiAndUserScoresToDetermineWhoWins = (userChoice, aiChoice) => {
    if ((userChoice === "R") && (aiChoice === "R")) {
        return "It's a draw!";
    } else if ((userChoice === "R") && (aiChoice === "R")) {
        return "It's a draw!";
    } else if ((userChoice === "P") && (aiChoice === "P")) {
        return "It's a draw!"
    } else if ((userChoice === "S") && (aiChoice === "S")) {
        return "It's a draw!"
    } else if ((userChoice === "R") && (aiChoice === "S")) {
        return "Player wins!";
    } else if ((userChoice === "R") && (aiChoice === "P")) {
        return "AI wins!";
    } else if ((userChoice === "P") && (aiChoice === "R")) {
        return "Player wins!";
    } else if ((userChoice === "P") && (aiChoice === "S")) {
        return "AI wins!";
    } else if ((userChoice === "S") && (aiChoice === "R")) {
        return "AI wins!";
    } else {
        return "Player wins!";
    }
}
alert(compareAiAndUserScoresToDetermineWhoWins())