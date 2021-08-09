const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('error, selection not valid')
    }
  
  }
  
  const getComputerChoice = () => {
   let computerChoice = Math.floor(Math.random()*3)
   switch (computerChoice){
     case 1 : computerChoice = 'rock';
     break;
     case 2 : computerChoice = 'paper';
     break;
     default : computerChoice = 'scissors';
     break;
   }
  return computerChoice;
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
  return 'game was a tie!';
    }
    if(userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Won!'
      }else{
        return 'User Won!'
      }
    }
  
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer Won!'
      }else{
        return 'User Won!'
      }
    }
  
      if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer Won!'
      }else{
        return 'User Won!'
      }
    }
  
     if (userChoice === 'bomb'){
      return 'User Won!!'
    }
  
  }
  
  const playGame = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice); 
    console.log(determineWinner(userChoice,computerChoice));
  };
    
  
  playGame();