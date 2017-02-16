console.log('Heyo');

var numSquares = 6;
var colors = randomRgbArr(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#mainColor");
var messageDisplay = document.querySelector("#message");
var headerBackground = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn =document.querySelectorAll(".mode")

init();
function init () {
	colorDisplay.textContent = pickedColor;  
	for(var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function() {
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === " Easy " ? numSquares = 3: numSquares = 6;
			resetter();
		});
	}
	for (i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.background = colors[i];

		//add click listeners to squars
		squares[i].addEventListener("click", function () {
			//grab color of picked square
			var clickedColor = this.style.background;
			console.log("clicked: " + clickedColor, "picked: " + pickedColor);
			
			if (clickedColor === pickedColor) {
				console.log("correct");
				messageDisplay.textContent = "Mr. Grey will see you now";
				resetButton.textContent = "Play again?";
				changeColors(clickedColor);
				headerBackground.style.background = clickedColor;
			}
			else
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Wrong";
			}
			//compare color of picked square with pickedColor

		});
	}
}

resetButton.addEventListener("click", function() { 
		resetter();
	});

function resetter () {
	colors = randomRgbArr(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent  = pickedColor;
	headerBackground.style.background = "steelblue"
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";	
	
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

}

function changeColors (color) {
	//loop through all squares & change to match pickedColor
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background =  pickedColor;
	}
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomRgbArr (nr) {
 var arr = []; 
 //into array push random rgb color
 for (i = 0; i < nr; i++) {
 	arr.push("rgb(" + Math.floor(Math.random()*250) + ", " + Math.floor(Math.random()*250) + ", " + Math.floor(Math.random()*250) + ")");
 }
 return arr;
}
