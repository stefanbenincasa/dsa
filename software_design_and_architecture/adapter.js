// Bottom Line: different Adapter instances are adapted to different Sockets and
// their voltage output, allowing for different devices to use them

// Adaptee
function Socket(voltage) {
	this.voltage = voltage
}

// Adapter
function Adapter(resistanceOhms) {
	this.resistanceOhms = resistanceOhms

	this.getVolts = function(socket, device) {
		let voltageFromSocket = socket.voltage, deviceVoltageNeed = device.requiredVoltage
		if(voltageFromSocket != deviceVoltageNeed) {
			return voltageFromSocket - this.resistanceOhms
		}
		else {
			return voltageFromSocket
		}
	}
}

// Target 
function Device(name, requiredVoltage) {
	this.name = name
	this.requiredVoltage = requiredVoltage
	this.state = "Off"

	this.run = function(socket, adapter) {
		console.log(`\nCommencing Startup of device: ${this.name}`)
		console.log(`This device has a Voltage Requirement of: ${this.requiredVoltage}`)
		console.log(`The desired Socket has a Voltage Output of: ${socket.voltage}`)
		console.log(`The supplied Adapter has a Resistance of: ${adapter.resistanceOhms}`)
		console.log(`Connecting to Socket through Adapter...\n`)

		if(adapter.getVolts(socket, adapter) != requiredVoltage) {
			console.log("Incorrect voltage supplied to this Device! Unplugging!\n")
		}
		else {
			this.state = "On"
			console.log(`Correct power supplied from the Socket through the Adapter! Device is: ${this.state}`)
		}
	}
}

// Client
let sockets = [ 
	new Socket(120), 
	new Socket(240) 
]

let devices = [ 
	new Device("Laptop", 50), 
	new Device("Phone", 40) 
]

let adapters = [ 
	new Adapter(70),
	new Adapter(50)
]

// Demonstate the effect of running different Devices, Adapters, and Sockets with each other
devices.forEach(device => adapters.forEach(adapter => sockets.forEach(socket => device.run(socket, adapter)))) 
console.log(`END\n`)
process.exit()

