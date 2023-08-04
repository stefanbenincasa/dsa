// Create and link three Nodes
let n1, n2, n3
n3 = new Node('ghi')
n2 = new Node('def', n3)
n1 = new Node('abc', n2)

// Reverse list
let head, prev_node, temp, first = true
head = n1

console.log("Original List Order: ", head)
while(head) {
	if(first) {
		first = false
		temp = head.next
		head.next = null
		prev_node = head
		head = temp
	}
	else if(!head.next) {
		head.next = prev_node
		head = null 
	}
	else {
		temp = head.next
		head.next = prev_node
		prev_node = head
		head = temp
	}
}

head = n3
print_list(head)

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

