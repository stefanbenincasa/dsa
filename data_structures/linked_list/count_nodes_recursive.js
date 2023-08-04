// Create three Nodes
let n1, n2, n3, current, head
n3 = new Node('ghi')
n2 = new Node('def', n3)
n1 = new Node('abc', n2)

// Traverse & Print
head = n1
let length = getCount(head, 0)
console.log(`\nTotal length of the Linked List: ${length}\n`)

// Functions
function Node(data, next) {
	this.data = data
	this.next = next ? next : null
}

function getCount(node, length) {
	if(!node) return length
	else if(node.next != null) 
		return getCount(node.next, ++length)	
	else
		return ++length
}
