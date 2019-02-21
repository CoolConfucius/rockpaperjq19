$(document).ready(init);

var userScore = 0; 
var computerScore = 0;
var userScore_span = $("#user-score");
var computerScore_span = $("#computer-score");
var result_p = $("#result");
var rock_button = $("#r");
var paper_button = $("#p");
var scissors_button = $("#s");

function init(){
console.log("Init");
  rock_button.click(rockClicked);
  paper_button.click(paperClicked);
  scissors_button.click(scissorsClicked);
  
}

function rockClicked(event){
  game("r"); 
}

function paperClicked(event){
  game("p"); 
}

function scissorsClicked(event){
  game("s"); 
}

function getComputerChoice() {
  var choices = ['r', 'p', 's'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  return "Error"; 
}

function win(userChoice, computerChoice) {
  userScore++; 
  console.log("win ", userScore);
  userScore_span.text(userScore) ; 
  result_p.text(`User's ${convertToWord(userChoice)} beats Computer's ${convertToWord(computerChoice)}. User wins!`); 
}

function lose(userChoice, computerChoice) {
  computerScore++; 
  console.log("lose ", computerScore);
  computerScore_span.text(computerScore) ; 
  result_p.text(`User's ${convertToWord(userChoice)} loses to Computer's ${convertToWord(computerChoice)}. User loses!`); 
}

function draw(userChoice, computerChoice){
  result_p.text(`User's ${convertToWord(userChoice)} equals Computer's ${convertToWord(computerChoice)}. It's a draw.`); 
}


function game(userChoice) {
  var computerChoice = getComputerChoice(); 
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr": 
    case "sp":
      console.log("user wins");
      win(userChoice, computerChoice); 
      break; 
    case "rp":
    case "ps": 
    case "sr":
      console.log("user loses");
      lose(userChoice, computerChoice); 
      break;
    case "rr":
    case "pp": 
    case "ss":
      console.log("draw");
      draw(userChoice, computerChoice); 
      break;  
  } 
}

