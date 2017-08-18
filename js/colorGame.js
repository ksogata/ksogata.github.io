var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode button event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }

  // square listeners
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }

  reset();
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  messageDisplay.textContent = "";

  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    if (colors [i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop thru all squares
  for (var i = 0; i < squares.length; i++) {
      // change each color
      squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length );
  return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = []
    // add num random colors to array
    for (var i = 0; i < num; i++) {
      // get random color and push into arr
      arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
  // pick a "red" from 0 - 255
  var red = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
