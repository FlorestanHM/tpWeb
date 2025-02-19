
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// les attributs de la 'classe'
    this.startX = 0;
    this.startY = 0;

    this.endX = 0;
    this.endY = 0

    this.clicked = false

    this.interactor = interactor

	// les 3 fonctions gérant les événements
    this.mouseClick = function(evt) {
        var pos = getMousePosition(canvas, evt)
        this.startX = pos.x
        this.startY = pos.y
        this.clicked = true
        // console.log(pos)
        this.interactor.onInteractionStart(this)
    }.bind(this)

    this.mouseDrag = function(evt) {
        if(this.clicked) {
            var pos = getMousePosition(canvas, evt)
            this.endX = pos.x
            this.endY = pos.y
            // console.log(pos)
            this.interactor.onInteractionUpdate(this)
        }
    }.bind(this)

    this.mouseDrop = function(evt) {
        if(this.clicked) {
            var pos = getMousePosition(canvas, evt)
            this.endX = pos.x
            this.endY = pos.y
            this.clicked = false
            // console.log(pos)
            this.interactor.onInteractionEnd(this)
        }
    }.bind(this)

	// les évènements liés aux fonctions précédentes
    canvas.addEventListener('mousedown', this.mouseClick)
    canvas.addEventListener('mousemove', this.mouseDrag)
    canvas.addEventListener('mouseup', this.mouseDrop)
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



