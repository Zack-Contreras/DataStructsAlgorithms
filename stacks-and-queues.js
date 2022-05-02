/*https://leetcode.com/problems/implement-queue-using-stacks/description/
first in first out

lookup - O(n)
pop - O(1)
push - O(1)
peek - O(1)

ex: waitlist, uber ride requests, printers

creating queues from arrays is not very efficient as shift turns O(1) into O(n)
better to be implemented with linked lists because when removing the first item we don't have to shift the rest of the items
*/
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(value) {
        const node = new Node(value)
        if (this.length === 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node;
        }
        this.length++
    }

    dequeue() {
        if (this.length === 0) return null
        if(this.first === this.last) {
            this.last = null
        }
        const first = this.first
        this.first = first.next;
        first.next = null
        this.length--
        return first
        
    }

    peek() {
        return this.first
    }
}

const queue = new Queue()
queue.enqueue('zack')
queue.enqueue('fritzi')
queue.enqueue('emma')
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());

class QueueArray {
    constructor() {
        this.queue = []
    }

    enqueue(value) {
        return this.queue.push(value)
    }

    dequeue() {
        return this.queue.shift()
    }

    peek() {
        if(this.queue.length < 1) return null
        return this.queue[0]
    }
}


/*
last in first out

lookup - O(n)
pop - O(1)
push - O(1)
peek - O(1)

ex: browser history 

works well with arrays and linked lists but arrays are techincally faster for lookup and have less memory for lookup
but linked lists have dymanic memory unlike arrays which have static or memory has to be increased at times
*/
class Stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        return this.stack.push(value)
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        if (this.stack.length < 1) return null
        return this.stack[this.stack.length - 1]
    }
}

const stackTester = new Stack()
stackTester.push("google.com")
stackTester.push("udemy.com")
stackTester.push("twitter.com")
console.log("popping - ",stackTester.pop());
console.log("peek - ",stackTester.peek());