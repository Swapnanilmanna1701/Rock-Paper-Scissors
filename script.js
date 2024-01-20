let userScore = 0;
let compScore = 0;
const msg = document.querySelector('#btn');
const userScores = document.querySelector('#user');
const compScores = document.querySelector('#comp');

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    console.log("choice was clicked!!", choiceId);
    playGame(choiceId);
  });
});

const playGame = (choiceId) => {
  console.log("user choice = ", choiceId);
  const compChoice = genCompChoice();
  console.log("comp Choice = ", compChoice);
  if (choiceId === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (choiceId === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (choiceId === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const drawGame = () => {
  console.log("draw game");
  msg.innerHTML = "🤝 Play Again";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScores.innerHTML = userScore;

    console.log("Congratulations!!");
    msg.innerHTML = "Congratulations!!";
    msg.style.backgroundColor = "green";

  } else {
    compScore++;
    compScores.innerHTML = compScore;
    msg.innerHTML = "Sorry!!";
    msg.style.backgroundColor = "red";
    console.log("Sorry!!");
  }
};

