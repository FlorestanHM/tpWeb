
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.x + this.width,   this.y + this.heigth);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArray.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

