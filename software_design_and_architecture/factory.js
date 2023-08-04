function Vehicle(engine, weight, top_speed) {
	this.engine = engine
	this.weight = weight 
	this.top_speed = top_speed 

	this.move = function move() {
		console.log(`I am a: ${this.constructor.name}, and I am moving`)
	}
}

function Boat(engine, weight, top_speed, has_cargo_hold) {
	Vehicle.call(this, engine, weight, top_speed)
	this.has_cargo_hold = has_cargo_hold
}

function Car(engine, weight, top_speed, has_left_side_drive) {
	Vehicle.call(this, engine, weight, top_speed)
	this.has_left_side_drive = has_left_side_drive 
}


function VehicleFactory() {
	this.create_car = function(engine, weight, top_speed, has_left_side_drive) {
		return new Car(engine, weight, top_speed, has_left_side_drive)
	}
	this.create_boat = function(engine, weight, top_speed, has_cargo_hold) {
		return new Boat(engine, weight, top_speed, has_cargo_hold)
	}
}

// Program //
let vehicles = [], vehicleFactory = new VehicleFactory()
vehicles.push(vehicleFactory.create_car("23XX001", "1T", "150 KM/H", false))
vehicles.push(vehicleFactory.create_boat("23XX001", "1T", "150 KM/H", true))

vehicles.forEach(vehicle => vehicle.move())
process.exit(1)

