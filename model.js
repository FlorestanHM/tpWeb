
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapeArray = new Array()
}

function Shape(x, y, color, thickness) {
    this.x = x
    this.y = y
    this.color = color
    this.thickness = thickness

}

function Rectangle(x, y, color, thickness, height, width) {
    Shape.call(this, x, y, color, thickness)
    this.width = width
    this. heigth = height
}

function Line(x, y, color, thickness, x2, y2) {
    Shape.call(this, x, y, color, thickness)
    this.x2 = x2
    this.y2 = y2
}