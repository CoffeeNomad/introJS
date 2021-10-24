let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()* 10);
  
};
const targetNum = generateTarget();


const compareGuesses = (humanGuess, computerGuess, targetNum) =>{
  let humanNum = Math.abs(humanGuess - targetNum);
  let computerNum = Math.abs(computerGuess - targetNum);
  if(humanNum > computerNum){
    return false;
  }else{
    return true;
  }
};

const updateScore = winner => {
  if(winner === 'human'){
    humanScore ++;
  }else{
    computerScore ++;
  }
};

const advanceRound = () => {
  currentRoundNumber ++;
};

/*generateTarget();
compareGuesses();
updateScore();
advanceRound();
*/



