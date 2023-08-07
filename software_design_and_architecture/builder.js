function Car(carBuilder) {
	this.make = carBuilder.make
	this.color = carBuilder.color
	this.topSpeed = carBuilder.topSpeed
	return carBuilder
}

function CarBuilder(make, color, topSpeed) {
	this.make = make
	this.color = color 
	this.topSpeed = topSpeed 

	this.setSteeringSide = function(steeringSide) {
		this.steeringSide = steeringSide
		return this
	}

	this.build = function() {
		return new Car(this)
	}
}

const cars = [
	new CarBuilder("Holden", "Red", "100KMH").setSteeringSide("Right").build(),
	new CarBuilder("Ford", "Bold", "110KMH").build()
]

console.log(cars)

