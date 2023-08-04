// Note that the first Node can not be deleted, 
// only skipped when assigning the initial Head,
// as this is a Singly Linked List

// Create three Nodes
let n1, n2, n3, current
n3 = new Node('ghi')
n2 = new Node('def', n3)
n1 = new Node('abc', n2)

// Delete Node bearing specific data
console.log('\nInitial Data:')

let delTargetData = 'def'
current = n1

while(current) {
	console.log(current.data)

	if(current.next && current.next.data === delTargetData) {
		console.log(`\nDeleting...Node: ${current.next.data}`)
		if(current.next.next) {
			current.next = current.next.next
		} else {
			current.next = null
		}
	}

	current = current.next
}

console.log('\nPrinting Trimmed List: ')
printList(n1)

// Class
function Node(data, next) {
	this.data = data
	this.next = next ? next : null
}

function printList(current) {
	while(current) {
		console.log(current.data)
		current = current.next
	}
}
