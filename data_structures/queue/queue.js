const Stack = require("../stack/stack")

// Main
const queue = {
  items: [10,2,4,5],
  enqueue: function(x) {
    let stack_one = new Stack(100, this.items), stack_two = new Stack(100, [])
    while(!stack_one.is_empty()) stack_two.push(stack_one.pop())

    stack_one.push(x)
    while(!stack_two.is_empty()) stack_one.push(stack_two.pop())

    this.items = Array.from(stack_one.values)
  },
  dequeue: function() {

  },
  print: function() {
    console.log(this.items)
  } 
}

queue.enqueue(1)
queue.enqueue(2)
queue.print()
