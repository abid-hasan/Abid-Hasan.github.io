var p1Button = document.querySelector("#p1Button");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
var p2Button = document.querySelector("#p2Button");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var playingTo = 5;
var gameOver = false;
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var playingToDisplay = document.querySelector("p span");

p1Button.addEventListener("click",function() {
  if(!gameOver) {
    p1Display.textContent = ++p1Score;
    if(p1Score === playingTo) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
});

p2Button.addEventListener("click",function() {
  if(!gameOver) {
    p2Display.textContent = ++p2Score;
    if(p2Score === playingTo) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
  }
});

resetButton.addEventListener("click",reset);

numInput.addEventListener("change",function() {
  playingToDisplay.textContent = this.value;
  playingTo = Number(this.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}