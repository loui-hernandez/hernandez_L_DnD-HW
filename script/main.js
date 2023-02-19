// slect your elements first
// there are targets => these are what the "user" uses

// this is a 1 to 1 connection to an element in the DOM 
	// let navButton = document.querySelector('#buttonButton');


// this is a 1 to many connection to elements in the DOM
// 
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	// collect all of the draggable pieces in the dragzone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	// collect ALL of the drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	// set up a global variable to store a reference to the dragged piece
	// I need to know this later when I drop it inon a zone
	draggedPiece;


// functions go in the middle
// these are the "actions" that should happen
function changeBGimage() {
	
// let newBGPath = "images/backGround" + this.id + ".jpg";
// 	debugger;
	

// object.property = "new value"
// theHeadline.textContent = "Drag and Drop is Fun!";
// theHeadline.classList.add("orange-headline");

// change background image inthe drop zone


// the `${}` is called a JavaScript Template String - whatever is inside the curly braces is evaluated at runtime and terpolated ( replaces the bracket notation)
	
puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleDrag(e) {
	console.log('started dragging');
	e.dataTransfer.setData(draggedPiece, this.id);
}

function handleStartDrag(e) {
	console.log('started dragging over');
	e.dataTransfer.setData(draggedPiece, this.id);
}

function handleDragOver(e) {
	e.preventDefault();
}



function handleDrop(e) {
	e.preventDefault();
	console.log('this piece was dropped');

	if (e.target.childElementCount == 0 && !(e.target instanceof HTMLImageElement)){
	
		let droppedElId = e.dataTransfer.getData(draggedPiece);
	
		this.appendChild(document.querySelector(`#${droppedElId}`));
	} 
}

function handleDragEnd(e) {
	console.log('dragging ended');
}


// event handling at the bottom => how things react when you use the targets
// how is the user going to interact with the lemements / controls you provide?

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGimage));

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add the dragover handling to the drop zone
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) {
	e.preventDefault();
}
// temp handling
tempLink.addEventListener('click', blockDefaultBehaviour)