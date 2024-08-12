let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  const userDifference = Math.abs(userGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);
  if (userDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
