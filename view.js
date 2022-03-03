
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.heigth);
    ctx.stroke();
};

Rectangle.prototype.shapeList = function () {
    return "Rect of color " + this.color + " and thickness " + this.thickness + " in (" + this.x + ", " + this.y + "), height of " + this.heigth + " and width of " + this.width
}

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

Line.prototype.shapeList = function () {
    return "Line of color " + this.color + " and thickness " + this.thickness + " between (" + this.x + ", " + this.y + ") and (" + this.x2 + ", " + this.y2 + ")"
}

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArray.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


Drawing.prototype.updateShapeList = function(ctx) {
    var list = document.getElementById("shapeList")
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    this.shapeArray.forEach(function (eltDuTableau) {
        var li = document.createElement('li');
        li.innerText = eltDuTableau.shapeList()
        var id = list.childNodes.length;
        var bouton = document.createElement('button');
        var span = document.createElement('span');

        bouton.setAttribute('id', id)
        bouton.setAttribute('class', 'btn btn-default')
        span.setAttribute('class', 'glyphicon glyphicon-remove-sign');
        bouton.appendChild(span);
        bouton.setAttribute('onClick', 'drawing.deleteShape('+id+', ' + ctx +')')

        li.appendChild(bouton)
        list.appendChild(li);
    });
};

Drawing.prototype.deleteShape = function(shapeId) {
    this.removeShape(shapeId)
    this.updateShapeList()
    this.paint(ctx)
};

