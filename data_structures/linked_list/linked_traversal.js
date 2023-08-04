// Create three Nodes
let n1, n2, n3, current
n3 = new Node('ghi')
n2 = new Node('def', n3)
n1 = new Node('abc', n2)

// Traverse & Print
current = n1
while(current) {
	console.log(current.data)
	current = current.next
}

// Class
function Node(data, next) {
	this.data = data
	this.next = next ? next : null
}

