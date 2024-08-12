let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
const getAbsoluteDistance = (value1, value2) => {
  return Math.abs(value1 - value2);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess >= 0 && userGuess <= 10) {
    const userDifference = getAbsoluteDistance(userGuess, targetNumber);
    const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);
    if (userDifference <= computerDifference) {
      return true;
    } else {
      return false;
    }
  } else {
    alert("Number is out of range!");
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
