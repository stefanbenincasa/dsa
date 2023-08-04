class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    printStack() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.top = null;
        this.height = 0;
    }
 
    // My code //
		push(value) {
			let newNode = new Node(value)
			if(!this.top) {
				this.top = newNode
			}
			else {
				newNode.next = this.top
				this.top = newNode
			}

			this.length++
			return this
		}
}
 


function test() {
    let myStack = new Stack(2);

    console.log("Before push():");
    console.log("--------------");
    myStack.getTop();
    myStack.getLength();

    console.log("\nStack:");
    myStack.printStack();

    myStack.push(1);

    console.log("\n\nAfter push():");
    console.log("-------------");
    myStack.getTop();
    myStack.getLength();

    console.log("\nStack:");
    myStack.printStack();
}


test();


/*
    EXPECTED OUTPUT:

    Before push():
    --------------
    Top: 2
    Length: 1

    Stack:
    2


    After push():
    -------------
    Top: 1
    Length: 2

    Stack:
    1
    2

*/
