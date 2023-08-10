// Bottom Line: different Adapter instances are adapted to different Sockets and
// their voltage output, allowing for different devices to use them

// Adaptee
function Socket(voltage) {
	this.voltage = voltage
	this.getVolts = function() {
		return this.voltage
	}
}

// Adapter
function Adapter(device, socket) {
	this.device = device
	this.socket = socket

	this.getVolts = function() {
		let volatageFromSocket = this.socket.getVolts(), deviceVoltageNeed = this.device.requiredVoltage
		if(voltageFromSocket != deviceVoltageNeed) {
			return voltageFromSocket - (voltageFromSocket - deviceVoltageNeed)	
		}
		else {
			return voltageFromSocket
		}
	}

	this.setDevice = function(device) { this.device = device }
	this.setSocket = function(socket) { this.socket = socket }
}

// Target 
function Device(name, requiredVoltage) {
	this.name = name
	this.requiredVoltage = requiredVoltage
	this.state = "Off"

	this.run = function(socket) {
		try {
			if(socket.getVolts() != requiredVoltage) {
				throw new Error("Incorrect voltage supplied to this Device! Unplugging!")
			}
			else {
				console.log(`Correct power supplied from 
				the Socket through the Adapter! Device is: ${this.state}`)
				setTimeout(() => process.exit(), 2000)
			}
		}
		catch(error) {
			process.exit()
		}
	}
}

// Client
let sockets = [ new Socket(120), new Socket(240) ]
// let adaptedDevices = [ new AdaptedDevices(120), new Adapter(240, 40) ] 
let devices = [ new Device("Laptop", 50), new Device("Phone", 40) ]


