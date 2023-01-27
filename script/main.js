// slect your elements first
// there are targets => these are what the "user" uses

// this is a 1 to 1 connection to an element in the DOM 
	// let navButton = document.querySelector('#buttonButton');


// this is a 1 to many connection to elements in the DOM
// 
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');



// functions go in the middle
// these are the "actions" that should happen
function changeBGimage() {
	debugger;
	
	// object.property = "new value"
	// theHeadline.textContent = "Drag and Drop is Fun!";
	// theHeadline.classList.add("orange-headline");

	// change background image inthe drop zone
	puzzleBoard.style.backgroundImage = 'url("../images/backGround"' + this.id + '".jpg")';
}



// event handling at the bottom => how things react when you use the targets
// how is the user going to interact with the lemements / controls you provide?

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGimage));
