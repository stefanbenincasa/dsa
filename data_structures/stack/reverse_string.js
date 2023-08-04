function push(item) {
	if(this.is_empty()) {
		this.values[0] = item
		this.values[1] = '\0'
	}
	else if(this.values.length + 1 > this.limit + 1) {
		throw new Error("Overflow Error!")
	}
	else {
		let pushed = false, index = 0
		while(!pushed) {
			if(this.values[index] === '\0') {
				this.values[index] = item
				this.values[index + 1] = '\0'
				pushed = true
			}
			index++
		}
	}
}

function pop() {
	if(this.is_empty()) {
		throw new Error("Underflow Error!")
	}
	else {
		let popped = false, index = 0, top_item

		while(!popped) {
			if(this.values[index] === '\0') { 
				top_item = this.values[index - 1]
				this.values[index - 1] = '\0'
				this.values.splice(index, 1)
				popped = true
			}

			index++
		}

		return top_item
	}
}

function is_empty() {
	return this.values[0] == '\0' 
}

function Stack(limit) {
	this.limit = limit
	this.values = ['\0']
	this.push = push
	this.pop = pop
	this.is_empty = is_empty
}

// Program
let 
temp = new Stack(10), 
reversed = new Stack(10),
string = "!@#$%^"

string.split('').forEach(letter => temp.push(letter))
while(!temp.is_empty()) { reversed.push(temp.pop()) }

console.log("\nInput Values: " + string)
console.log("Reversed Values: " + reversed.values.join('') + "\n")
