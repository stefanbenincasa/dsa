// Create three Nodes
let n1, n2, n3, current
n3 = new Node('ghi')
n2 = new Node('def', n3)
n1 = new Node('abc', n2)

// Print initial List
console.log('\nInitial List: ')
printList(n1)

// Insert at the front of the List
let n4 = new Node('jkl', n1)
console.log('\nInsertion at Front of List: ')
printList(n4)

// Insert after a given Node; n2
// The pointer to n3 must be restored if severed
current = n2
current.next = n4
current = n4
current.next = n3

console.log('\nInsertion in Middle of List: ')
printList(n1)

console.log('\nEND\n')

// Class
function Node(data, next) {
	this.data = data
	this.next = next ? next : null
}

// Helper
function printList(current) {
	while(current) {
		console.log(current.data)
		current = current.next
	}
}

