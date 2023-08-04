// Balanced Brackets
// node balanced_brackets.js "{}()" === valid
// node balanced_brackets.js "{[}]" === invalid

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

function peek() {
	if(this.is_empty()) {
		throw new Error("Underflow Error!")
	} 
	else {
		let peeked = false, index = 0, top_item
		while(!peeked) {
			if(this.values[index] === '\0') return this.values[index - 1]
			index++
		}
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
	this.peek = peek
	this.is_empty = is_empty
}

function get_corresponding(direction, character) {
	let 
	open_brackets = ["(", "[", "{"], 
	closed_brackets = [")", "]", "}"], 
	corresponding

	if(direction === "closed") {
		for(let i = 0; i < open_brackets.length; i++) {
			if(open_brackets[i] === character) {
				corresponding = closed_brackets[i]
				return corresponding
			}
		}
	} else if (direction === "open") {
		for(let i = 0; i < closed_brackets.length; i++) {
			if(closed_brackets[i] === character) {
				corresponding = open_brackets[i]
				return corresponding
			}
		}
	}

	if(!corresponding) return null
}

// Program
try {
	let 
	corresponding_opening,
	inputs = process.argv.filter((input, index) => { return index >= 2 }),
	open_stack = new Stack(20),
	closed_stack = new Stack(20),
	open_regex = /[\{\(\[]/gim,
	closed_regex = /[\}\)\]]/gim 

	inputs
	.forEach((input, input_index) => {
		input.split('').forEach((letter) => {

			if(letter.match(open_regex)) {
				open_stack.push(letter)
			}
			else if(letter.match(closed_regex)) {
				corresponding_opening = get_corresponding("open", letter)
				if(open_stack.is_empty() || corresponding_opening !== open_stack.pop()) { 
					throw new Error(`Invalid bracket closing sequence @ Input Index: ${input_index}`) 
				}
			}
		})
	})

	console.log('\nValid bracket sequence[s]!\n')
}
catch (error) {
	console.error(`\nError: ${error.message}\nProgram Terminated.\n`)
	return
}

