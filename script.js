"use strict";
let numberThatWillBeRandomised = Math.trunc(Math.random() * 20) + 1;
let ChancesLeft = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  ChancesLeft = 20;
  numberThatWillBeRandomised = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = ChancesLeft;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});
function clearInputBox() {
  document.querySelector(".guess").value = "";
}
document.querySelector(".score").textContent = ChancesLeft;
console.log(numberThatWillBeRandomised);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  function whenCorrect() {
    document.querySelector(".message").textContent = "Correct Value";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = guess;
  }
  clearInputBox();
  // When there is no input
  console.log(numberThatWillBeRandomised);
  if (!guess) {
    document.querySelector(".message").textContent = " No number!";
  } else if (guess === numberThatWillBeRandomised) {
    whenCorrect();
    highscore = ChancesLeft;
    if (ChancesLeft > highscore) {
      document.querySelector(".highscore").textContent = ChancesLeft;
    }
    if (highscore === 20) {
      document.querySelector(".score").textContent =
        highscore + "(You are insanely lucky)";
    }
  }
  //rate this
  else if (ChancesLeft === 0) {
    document.querySelector(".message").textContent = "You lost the game.";
    document.querySelector("body").style.backgroundColor = "#ff0000";
  } else {
    ChancesLeft--;
    document.querySelector(".score").textContent = ChancesLeft;
    guess < numberThatWillBeRandomised
      ? (document.querySelector(".message").textContent =
          "Value entered is less than guessed value")
      : (document.querySelector(".message").textContent =
          "Value entered is more than guessed value");
  }
});
