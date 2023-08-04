/// Merge Sorted List ///

// Create two Lists
let a, b, c

a = new Node(5, new Node(10, new Node(15)))
b = new Node(2, new Node(3, new Node(20)))

// Splice together the Nodes of the sorted Lists, in increasing order
// Find the least number succesively and insert into new list
let x = a, y = b, z = c
while(x) {
	while(y) {
		if(y.data < x.data) {
			c = y
			z = c.next
		}
		else {

		}
		y = y.next
	}
	x = x.next
}

// Functions
function Node(data, next) {
	this.data = data 
	this.next = next ? next : null
}

function print_list(head) {
	while(head) {
		console.log(head.data)
		head = head.next
	}
}

