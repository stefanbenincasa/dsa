/* 
  Demonstration of the Composite Design Pattern.

	Shape is the Base Class,
	Circle is a Leaf,
	Drawing is the Composite, that coordinates.
 */

function Shape(area, name) {
	this.area = area + " cm2"
	this.name = name
}

function Circle(radius, diameter) {
	Shape.call(this, Math.round(Math.PI * Math.pow(radius, 2)), "Circle")
	this.radius = radius
	this.diameter = diameter
}

function Square(length, width) {
	if(length != width) throw new Error()
	Shape.call(this, length * width, "Square")
	this.length = length 
	this.width = width 
}

function Drawing(shapes) {
	if(shapes.length === 0 || !Array.isArray(shapes)) throw new Error()
	this.shapes = shapes
	this.draw = function(color) { 
		console.log(`\nCommencing Drawing...\n`)
		this.shapes.forEach(shape => console.log(`\tDrawing Shape: ${shape.name}, in Color: ${color}.`))
		console.log(`\nEND\n`)
	}
}

let 
circle = new Circle(2, 4), 
square = new Square(4, 4), 
drawing = new Drawing([circle, square])

drawing.draw("Blue")

