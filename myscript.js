
const options = ["Rock" , "Paper" , "Scissors"]

function getComputerChoice(){
  const choice = options [Math.floor(Math.random() * options.length)];
  return choice;
}

function CheckWinner(playerSelection , computerSelection){
  if (playerSelection == computerSelection){
    return "Tie !";
  }
  else if ( (playerSelection == "Rock" && computerSelection == "Scissors")||
    (playerSelection == "Scissors" && computerSelection == "Paper")||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ){return "player"}
  else{return "computer"}
}
function playRound(playerSelection , computerSelection) {
  const result = CheckWinner(playerSelection , computerSelection);
  if (result == "Tie !"){
    return "It's a Tie !!!"
  }
  else if (result == "player") {
    return `You Won! ${playerSelection} beats ${computerSelection}`
  }
  else {
    return `You LOSE ! ${computerSelection} beats ${playerSelection}`
  }
} 



getComputerChoice()