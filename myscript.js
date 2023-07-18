
const options = ["rock" , "paper" , "scissors"];

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function CheckWinner(playerSelection , computerSelection){
  if (playerSelection == computerSelection){
    return "Tie !";
  } else if ( (playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "rock")
  ){return "player";}
  else{return "computer";}
}

function playRound(playerSelection , computerSelection) {
  const result = CheckWinner(playerSelection , computerSelection);
  if (result == "Tie !"){
    return "It's a Tie !!!";
  }
  else if (result == "player") {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    return `You LOSE ! ${computerSelection} beats ${playerSelection}`;
  }
} 

function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt(" Rock , Paper or Scissors ???");
    // console.log(choice)
    if(choice == null){
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game(){
  let scoreplayer = 0;
  let scorecomputer = 0;
  console.log("Welcome to you , HUMAN !");
  for ( let i = 0; i < 5 ; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection , computerSelection));
    console.log("----------------")
    if (CheckWinner(playerSelection , computerSelection)== "player"){
      scoreplayer++;
    } 
    else if (CheckWinner(playerSelection , computerSelection)== "computer"){
      scorecomputer++;
    }
    
  }
  console.log("***Game Over***");
  if(scoreplayer > scorecomputer){
    console.log("Player was the WINNER!")
  }
  else if(scoreplayer < scorecomputer){
    console.log("Computer was the WINNER!")
  }
  else {console.log("We have a Tie !!!")}
}
game()
/* we need to write 5 inputs in console and then the computer will write the results*/