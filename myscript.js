
const options = ["Rock" , "Paper" , "Scissors"]

function getComputerChoice(){
  const choice = options [Math.floor(Math.random() * options.length)];
  return choice;
}
getComputerChoice()