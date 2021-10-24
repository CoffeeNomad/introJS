const getUserChoice =(userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
      return userInput;
    }else{
      console.log('ERROR!')
    }
  }
  //getUserChoice('Rock');
  
  function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }
  
  //console.log(getComputerChoice());
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return 'Tie Game!'
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Wins!';
      }else{
        return 'User Wins!';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer Wins!';
      }else{
        return 'User Wins!';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer Wins!';
      }else{
        return 'User Wins!';
      }
    }
    if(userChoice === 'bomb'){
      return 'User Wins!'
    }
  }
  
  function playGame(){
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log('User threw: '+ userChoice);
    console.log('Computer threw: '+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  