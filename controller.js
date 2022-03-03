
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById("butRect").onclick = (_) => this.currEditingMode = editingMode.rect
	document.getElementById("butLine").onclick = (_) => this.currEditingMode = editingMode.line

	document.getElementById("spinnerWidth").onchange = (e) => this.currLineWidth = e.target.value
	document.getElementById("colour").onchange = (e) => this.currColour = e.target.value

	document.getElementById("butClear").addEventListener('click', clearDrawing)

	function clearDrawing () {
		drawing.shapeArray = []
		drawing.paint(ctx, canvas)
		drawing.updateShapeList()
	}

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {


	}.bind(this)

	this.onInteractionUpdate = function (dnd) {
		switch(this.currEditingMode){
			case editingMode.rect: {
				var heigth = dnd.endY - dnd.startY
				var width = dnd.endX - dnd.startX
				this.currentShape = new Rectangle(dnd.startX, dnd.startY, this.currColour, this.currLineWidth, heigth, width)
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.startX, dnd.startY, this.currColour, this.currLineWidth, dnd.endX, dnd.endY)
				break;
			}
		}
		drawing.paint(ctx, canvas)
		this.currentShape.paint(ctx)
	}.bind(this)

	this.onInteractionEnd = function (dnd) {
		drawing.shapeArray.push(this.currentShape)
		this.currentShape.paint(ctx)
		drawing.paint(ctx, canvas);
		drawing.updateShapeList()
	}.bind(this)
};


